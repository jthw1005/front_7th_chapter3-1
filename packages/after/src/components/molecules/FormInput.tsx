import React from 'react';

interface FormInputProps {
	name: string;
	value: string;
	onChange: (value: string) => void;
	onBlur?: (value: string) => void;
	label?: string;
	type?: 'text' | 'email' | 'password' | 'number' | 'url';
	placeholder?: string;
	required?: boolean;
	disabled?: boolean;
	error?: string;
	helpText?: string;
	width?: 'small' | 'medium' | 'large' | 'full';
	className?: string;
}

export const FormInput = ({
	name,
	value,
	onChange,
	onBlur,
	label,
	type = 'text',
	placeholder,
	required = false,
	disabled = false,
	error,
	helpText,
	width = 'full',
	className,
}: FormInputProps) => {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange(e.target.value);
	};

	const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
		if (onBlur) {
			onBlur(e.target.value);
		}
	};

	const inputClasses = ['form-input', error && 'error', `input-width-${width}`, className]
		.filter(Boolean)
		.join(' ');
	const helperClasses = ['form-helper-text', error && 'error'].filter(Boolean).join(' ');

	return (
		<div className="form-group">
			{label && (
				<label htmlFor={name} className="form-label">
					{label}
					{required && <span className="text-destructive ml-1">*</span>}
				</label>
			)}

			<input
				id={name}
				name={name}
				type={type}
				value={value}
				onChange={handleChange}
				onBlur={handleBlur}
				placeholder={placeholder}
				required={required}
				disabled={disabled}
				className={inputClasses}
				aria-invalid={!!error}
				aria-describedby={error ? `${name}-error` : helpText ? `${name}-description` : undefined}
			/>

			{error && (
				<span id={`${name}-error`} className={helperClasses}>
					{error}
				</span>
			)}
			{helpText && !error && (
				<span id={`${name}-description`} className="form-helper-text">
					{helpText}
				</span>
			)}
		</div>
	);
};
