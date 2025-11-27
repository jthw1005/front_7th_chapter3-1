import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const inputVariants = cva(
	'form-input transition-colors focus:outline-none focus:border-primary-500',
	{
		variants: {
			error: {
				true: 'border-danger-500 focus:border-danger-500',
				false: '',
			},
			width: {
				small: 'input-width-small',
				medium: 'input-width-medium',
				large: 'input-width-large',
				full: 'input-width-full',
			},
		},
		defaultVariants: {
			error: false,
			width: 'full',
		},
	},
);

export interface InputProps
	extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'width'>,
		Omit<VariantProps<typeof inputVariants>, 'error'> {
	label?: string;
	error?: string;
	helpText?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, error, width, label, helpText, required, name, ...props }, ref) => {
		const displayError = error;
		const helperClasses = cn('form-helper-text', displayError && 'error');

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
					ref={ref}
					className={cn(inputVariants({ error: !!error, width }), className)}
					required={required}
					{...props}
				/>

				{displayError && <span className={helperClasses}>{displayError}</span>}
				{helpText && !displayError && <span className="form-helper-text">{helpText}</span>}
			</div>
		);
	},
);

Input.displayName = 'Input';
