#!/usr/bin/env node

/**
 * Figma Tokens to CSS Transformer
 *
 * Converts figmaToken.json to CSS custom properties in components.css
 * Used by GitHub Actions to automate design token synchronization
 */

const fs = require('fs');
const path = require('path');

const TOKENS_FILE = path.join(__dirname, '../figmaToken.json');
const CSS_FILE = path.join(__dirname, '../packages/after/src/styles/components.css');

// Token type to CSS comment mapping
const TOKEN_CATEGORIES = {
  'color-primary': 'Colors - Primary',
  'color-secondary': 'Colors - Secondary',
  'color-success': 'Colors - Success',
  'color-danger': 'Colors - Danger',
  'color-warning': 'Colors - Warning',
  'spacing': 'Spacing',
  'font-size': 'Typography - Font Sizes',
  'font-weight': 'Typography - Font Weights',
  'line-height': 'Typography - Line Heights',
};

/**
 * Categorize token by its name prefix
 */
function categorizeToken(tokenName) {
  const name = tokenName.replace('--', '');
  for (const [prefix, category] of Object.entries(TOKEN_CATEGORIES)) {
    if (name.startsWith(prefix)) {
      return category;
    }
  }
  return 'Other';
}

/**
 * Read and parse figmaToken.json
 */
function readTokens() {
  try {
    const content = fs.readFileSync(TOKENS_FILE, 'utf8');
    const tokens = JSON.parse(content);
    return tokens.global || {};
  } catch (error) {
    console.error('❌ Error reading tokens file:', error.message);
    process.exit(1);
  }
}

/**
 * Group tokens by category
 */
function groupTokens(tokens) {
  const grouped = {};

  for (const [name, token] of Object.entries(tokens)) {
    const category = categorizeToken(name);
    if (!grouped[category]) {
      grouped[category] = [];
    }
    grouped[category].push({ name, ...token });
  }

  return grouped;
}

/**
 * Parse existing @theme block from CSS to preserve non-Figma tokens
 */
function parseExistingTheme() {
  try {
    const content = fs.readFileSync(CSS_FILE, 'utf8');
    const themeMatch = content.match(/@theme\s*\{([^}]*)\}/s);

    if (!themeMatch) {
      return {};
    }

    const themeContent = themeMatch[1];
    const tokens = {};
    let currentCategory = 'Other';

    // Parse line by line
    const lines = themeContent.split('\n');
    for (const line of lines) {
      const trimmed = line.trim();

      // Check for category comment
      if (trimmed.startsWith('/* ') && trimmed.endsWith(' */')) {
        currentCategory = trimmed.slice(3, -3).trim();
        continue;
      }

      // Parse token: --name: value;
      const tokenMatch = trimmed.match(/^(--[\w-]+):\s*(.+?);$/);
      if (tokenMatch) {
        const [, name, value] = tokenMatch;
        if (!tokens[currentCategory]) {
          tokens[currentCategory] = [];
        }
        tokens[currentCategory].push({ name, value, type: 'existing' });
      }
    }

    return tokens;
  } catch (error) {
    console.warn('⚠️  Could not parse existing theme, starting fresh');
    return {};
  }
}

/**
 * Merge Figma tokens with existing tokens (Figma tokens take precedence)
 */
function mergeTokens(existingTokens, newTokens) {
  const merged = { ...existingTokens };

  // Add or update with new Figma tokens
  for (const [category, tokens] of Object.entries(newTokens)) {
    if (!merged[category]) {
      merged[category] = [];
    }

    // Create a map of existing token names in this category
    const existingNames = new Set(
      merged[category].map(t => t.name)
    );

    // Update existing or add new tokens
    for (const newToken of tokens) {
      const existingIndex = merged[category].findIndex(t => t.name === newToken.name);

      if (existingIndex !== -1) {
        // Update existing token
        merged[category][existingIndex] = { ...newToken, type: 'figma' };
      } else {
        // Add new token
        merged[category].push({ ...newToken, type: 'figma' });
      }
    }
  }

  return merged;
}

/**
 * Generate @theme block CSS content
 */
function generateThemeCSS(groupedTokens) {
  const lines = ['@theme {'];

  // Define category order
  const categoryOrder = [
    'Colors - Primary',
    'Colors - Secondary',
    'Colors - Success',
    'Colors - Danger',
    'Colors - Warning',
    'Spacing',
    'Typography - Font Sizes',
    'Typography - Font Weights',
    'Typography - Line Heights',
    'Other'
  ];

  for (const category of categoryOrder) {
    const tokens = groupedTokens[category];
    if (!tokens || tokens.length === 0) continue;

    lines.push(`\t/* ${category} */`);

    for (const token of tokens) {
      lines.push(`\t${token.name}: ${token.value};`);
    }
    lines.push('');
  }

  lines.push('}');

  return lines.join('\n');
}

/**
 * Read existing CSS and replace @theme block
 */
function updateCSS(newThemeBlock) {
  try {
    let content = fs.readFileSync(CSS_FILE, 'utf8');

    // Find @theme block using regex
    const themeRegex = /@theme\s*\{[^}]*\}/s;

    if (themeRegex.test(content)) {
      // Replace existing @theme block
      content = content.replace(themeRegex, newThemeBlock);
      console.log('✅ Updated existing @theme block');
    } else {
      // Insert new @theme block after @custom-variant
      const insertPosition = content.indexOf('@custom-variant');
      if (insertPosition !== -1) {
        const lineEnd = content.indexOf('\n', insertPosition);
        content = content.slice(0, lineEnd + 1) + '\n' + newThemeBlock + '\n' + content.slice(lineEnd + 1);
        console.log('✅ Inserted new @theme block');
      } else {
        console.error('❌ Could not find insertion point in CSS file');
        process.exit(1);
      }
    }

    fs.writeFileSync(CSS_FILE, content, 'utf8');
    console.log('✅ CSS file updated successfully');

  } catch (error) {
    console.error('❌ Error updating CSS file:', error.message);
    process.exit(1);
  }
}

/**
 * Generate summary of changes
 */
function generateSummary(groupedTokens) {
  const totalTokens = Object.values(groupedTokens).reduce(
    (sum, tokens) => sum + tokens.length,
    0
  );

  console.log('\n📊 Token Transformation Summary:');
  console.log(`   Total tokens: ${totalTokens}`);

  for (const [category, tokens] of Object.entries(groupedTokens)) {
    if (tokens.length > 0) {
      console.log(`   - ${category}: ${tokens.length}`);
    }
  }
}

/**
 * Main execution
 */
function main() {
  console.log('🎨 Starting Figma Token Transformation...\n');

  // Check if files exist
  if (!fs.existsSync(TOKENS_FILE)) {
    console.error(`❌ Token file not found: ${TOKENS_FILE}`);
    process.exit(1);
  }

  if (!fs.existsSync(CSS_FILE)) {
    console.error(`❌ CSS file not found: ${CSS_FILE}`);
    process.exit(1);
  }

  // Parse existing tokens from CSS
  const existingTokens = parseExistingTheme();
  console.log(`📖 Found ${Object.values(existingTokens).flat().length} existing tokens in CSS`);

  // Read and process new Figma tokens
  const newTokens = readTokens();
  console.log(`📥 Read ${Object.keys(newTokens).length} tokens from figmaToken.json`);

  const groupedNewTokens = groupTokens(newTokens);

  // Merge existing with new tokens (new tokens take precedence)
  const mergedTokens = mergeTokens(existingTokens, groupedNewTokens);
  console.log(`🔄 Merged into ${Object.values(mergedTokens).flat().length} total tokens`);

  const themeCSS = generateThemeCSS(mergedTokens);

  // Update CSS file
  updateCSS(themeCSS);

  // Print summary
  generateSummary(mergedTokens);

  console.log('\n✨ Transformation complete!\n');
}

// Run if executed directly
if (require.main === module) {
  main();
}

module.exports = { readTokens, groupTokens, generateThemeCSS };
