// Form validation business logic
export const useFormValidation = () => {
	// Username validation
	const validateUsername = (value: string, checkBusinessRules = false): string | undefined => {
		if (!value) return undefined;

		if (value.length < 3) {
			return '사용자명은 3자 이상이어야 합니다';
		}

		if (!/^[a-zA-Z0-9_]+$/.test(value)) {
			return '영문, 숫자, 언더스코어만 사용 가능합니다';
		}

		if (value.length > 20) {
			return '사용자명은 20자 이하여야 합니다';
		}

		// Business rule: Reserved words
		if (checkBusinessRules) {
			const reservedWords = ['admin', 'root', 'system', 'administrator'];
			if (reservedWords.includes(value.toLowerCase())) {
				return '예약된 사용자명입니다';
			}
		}

		return undefined;
	};

	// Email validation
	const validateEmail = (
		value: string,
		checkBusinessRules = false,
		requireCompanyDomain = false,
	): string | undefined => {
		if (!value) return undefined;

		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
			return '올바른 이메일 형식이 아닙니다';
		}

		// Business rule: Company email domain only
		if (checkBusinessRules && requireCompanyDomain) {
			if (!value.endsWith('@company.com') && !value.endsWith('@example.com')) {
				return '회사 이메일(@company.com 또는 @example.com)만 사용 가능합니다';
			}
		}

		return undefined;
	};

	// Post title validation
	const validatePostTitle = (value: string, checkBusinessRules = false): string | undefined => {
		if (!value) return undefined;

		if (value.length < 5) {
			return '제목은 5자 이상이어야 합니다';
		}

		if (value.length > 100) {
			return '제목은 100자 이하여야 합니다';
		}

		// Business rule: Banned words
		if (checkBusinessRules) {
			const bannedWords = ['광고', '스팸', '홍보'];
			const hasBannedWord = bannedWords.some((word) => value.includes(word));
			if (hasBannedWord) {
				return '제목에 금지된 단어가 포함되어 있습니다';
			}
		}

		return undefined;
	};

	return {
		validateUsername,
		validateEmail,
		validatePostTitle,
	};
};
