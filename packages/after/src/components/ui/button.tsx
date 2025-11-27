import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
	'inline-block font-normal leading-normal rounded-sm cursor-pointer border border-solid whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed',
	{
		variants: {
			variant: {
				primary:
					'bg-primary-500 text-white border-primary-700 hover:bg-primary-700 hover:disabled:bg-primary-100',
				secondary:
					'bg-secondary-100 text-gray-800 border-secondary-500 hover:bg-secondary-500 hover:disabled:bg-secondary-700',
				danger:
					'bg-danger-500 text-white border-danger-700 hover:bg-danger-700 hover:disabled:bg-danger-100',
				success:
					'bg-success-500 text-white border-success-700 hover:bg-success-700 hover:disabled:bg-success-100',
			},
			size: {
				sm: 'px-3 py-1.5 text-sm',
				md: 'px-5 py-2.5 text-base',
				lg: 'px-6 py-3 text-md',
			},
			fullWidth: {
				true: 'w-full',
			},
		},
		defaultVariants: {
			variant: 'primary',
			size: 'md',
		},
	},
);

function Button({
	className,
	variant,
	size = 'md',
	asChild = false,
	type = 'button',
	disabled = false,
	...props
}: React.ComponentProps<'button'> &
	VariantProps<typeof buttonVariants> & {
		asChild?: boolean;
	}) {
	const Comp = asChild ? Slot : 'button';

	return (
		<Comp
			data-slot="button"
			type={type}
			disabled={disabled}
			className={cn(buttonVariants({ variant, size, className }))}
			{...props}
		/>
	);
}

export default Button;
