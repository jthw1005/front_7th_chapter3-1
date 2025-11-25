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
					'bg-[#1976d2] text-white border-[#1565c0] hover:bg-[#1565c0] hover:disabled:bg-[#1976d2]',
				secondary:
					'bg-[#f5f5f5] text-[#333] border-[#ddd] hover:bg-[#e0e0e0] hover:disabled:bg-[#f5f5f5]',
				danger:
					'bg-[#d32f2f] text-white border-[#c62828] hover:bg-[#c62828] hover:disabled:bg-[#d32f2f]',
				success:
					'bg-[#388e3c] text-white border-[#2e7d32] hover:bg-[#2e7d32] hover:disabled:bg-[#388e3c]',
			},
			size: {
				sm: 'px-3 py-1.5 text-[13px]',
				md: 'px-5 py-2.5 text-[14px]',
				lg: 'px-6 py-3 text-[15px]',
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
