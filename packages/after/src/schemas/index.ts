import { z } from 'zod';

// Reserved username words
const RESERVED_USERNAMES = ['admin', 'root', 'system', 'administrator'];

// Banned words in post titles
const BANNED_WORDS = ['광고', '스팸', '홍보'];

// User validation schema (based on useFormValidation hook)
export const userFormSchema = z.object({
	username: z
		.string()
		.min(1, '사용자명을 입력하세요')
		.min(3, '사용자명은 3자 이상이어야 합니다')
		.max(20, '사용자명은 20자 이하여야 합니다')
		.regex(/^[a-zA-Z0-9_]+$/, '영문, 숫자, 언더스코어만 사용 가능합니다')
		.refine(
			(value) => !RESERVED_USERNAMES.includes(value.toLowerCase()),
			'예약된 사용자명입니다',
		),
	email: z
		.string()
		.min(1, '이메일을 입력하세요')
		.regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, '올바른 이메일 형식이 아닙니다'),
	role: z.enum(['admin', 'moderator', 'user', 'guest'], {
		message: '역할을 선택하세요',
	}),
	status: z.enum(['active', 'inactive', 'suspended'], {
		message: '상태를 선택하세요',
	}),
});

export type UserFormSchema = z.infer<typeof userFormSchema>;

// Optional: User form schema with company email requirement
export const userFormSchemaWithCompanyEmail = userFormSchema.extend({
	email: z
		.string()
		.min(1, '이메일을 입력하세요')
		.regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, '올바른 이메일 형식이 아닙니다')
		.refine(
			(value) => value.endsWith('@company.com') || value.endsWith('@example.com'),
			'회사 이메일(@company.com 또는 @example.com)만 사용 가능합니다',
		),
});

// Post validation schema (based on useFormValidation hook)
export const postFormSchema = z.object({
	title: z
		.string()
		.min(1, '제목을 입력하세요')
		.min(5, '제목은 5자 이상이어야 합니다')
		.max(100, '제목은 100자 이하여야 합니다')
		.refine(
			(value) => !BANNED_WORDS.some((word) => value.includes(word)),
			'제목에 금지된 단어가 포함되어 있습니다',
		),
	content: z
		.string()
		.min(1, '내용을 입력하세요')
		.min(10, '내용은 최소 10자 이상이어야 합니다'),
	author: z
		.string()
		.min(1, '작성자를 입력하세요')
		.min(2, '작성자명은 최소 2자 이상이어야 합니다')
		.max(50, '작성자명은 최대 50자까지 입력 가능합니다'),
	category: z.enum(['development', 'design', 'accessibility'], {
		message: '카테고리를 선택하세요',
	}),
	status: z.enum(['published', 'draft', 'archived', 'pending', 'rejected'], {
		message: '상태를 선택하세요',
	}),
});

export type PostFormSchema = z.infer<typeof postFormSchema>;
