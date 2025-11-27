import React, { useState } from 'react';
import { useFormValidation } from '@/hooks/useFormValidation';

// Improved: UI component still accepts fieldType for validation, but delegates to hook
interface FormInputProps {
	name: string;
	value: string;
	onChange: (value: string) => void;
	label?: string;
	type?: 'text' | 'email' | 'password' | 'number' | 'url';
	placeholder?: string;
	required?: boolean;
	disabled?: boolean;
	error?: string;
	helpText?: string;
	width?: 'small' | 'medium' | 'large' | 'full';

	// Field type for validation
	fieldType?: 'username' | 'email' | 'postTitle' | 'slug' | 'normal';
	entityType?: 'user' | 'post';
	checkBusinessRules?: boolean;
}

export const FormInput = ({
	name,
	value,
	onChange,
	label,
	type = 'text',
	placeholder,
	required = false,
	disabled = false,
	error,
	helpText,
	width = 'full',
	fieldType = 'normal',
	entityType,
	checkBusinessRules = false,
}: FormInputProps) => {
	const [internalError, setInternalError] = useState('');

	// Use validation hook for business logic
	const { validateUsername, validateEmail, validatePostTitle } = useFormValidation();

	// Improved: Delegate validation to hook
	const validateField = (val: string) => {
		setInternalError('');

		if (!val) return;

		let validationError: string | undefined;

		if (fieldType === 'username') {
			validationError = validateUsername(val, checkBusinessRules);
		} else if (fieldType === 'email') {
			const requireCompanyDomain = checkBusinessRules && entityType === 'user';
			validationError = validateEmail(val, checkBusinessRules, requireCompanyDomain);
		} else if (fieldType === 'postTitle') {
			validationError = validatePostTitle(val, checkBusinessRules);
		}

		if (validationError) {
			setInternalError(validationError);
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = e.target.value;
		onChange(newValue);
		validateField(newValue);
	};

	const displayError = error || internalError;
	const inputClasses = ['form-input', displayError && 'error', `input-width-${width}`]
		.filter(Boolean)
		.join(' ');
	const helperClasses = ['form-helper-text', displayError && 'error'].filter(Boolean).join(' ');

	return (
		<div className="form-group">
			{label && (
				<label htmlFor={name} className="form-label">
					{label}
					{required && <span style={{ color: '#d32f2f' }}>*</span>}
				</label>
			)}

			<input
				id={name}
				name={name}
				type={type}
				value={value}
				onChange={handleChange}
				placeholder={placeholder}
				required={required}
				disabled={disabled}
				className={inputClasses}
			/>

			{displayError && <span className={helperClasses}>{displayError}</span>}
			{helpText && !displayError && <span className="form-helper-text">{helpText}</span>}
		</div>
	);
};
