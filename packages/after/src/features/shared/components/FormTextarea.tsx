import * as React from 'react';

interface FormTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	label?: string;
	error?: string;
	helpText?: string;
}

export const FormTextarea = React.forwardRef<HTMLTextAreaElement, FormTextareaProps>(
	({ name, label, placeholder, required = false, disabled = false, error, helpText, rows = 4, ...props }, ref) => {
		const textareaClasses = ['form-textarea', error && 'error'].filter(Boolean).join(' ');
		const helperClasses = ['form-helper-text', error && 'error'].filter(Boolean).join(' ');

		return (
			<div className="form-group">
				{label && (
					<label htmlFor={name} className="form-label">
						{label}
						{required && <span style={{ color: '#d32f2f' }}>*</span>}
					</label>
				)}

				<textarea
					id={name}
					name={name}
					ref={ref}
					placeholder={placeholder}
					required={required}
					disabled={disabled}
					rows={rows}
					className={textareaClasses}
					aria-invalid={!!error}
					aria-describedby={error ? `${name}-error` : helpText ? `${name}-description` : undefined}
					{...props}
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
	},
);

FormTextarea.displayName = 'FormTextarea';
