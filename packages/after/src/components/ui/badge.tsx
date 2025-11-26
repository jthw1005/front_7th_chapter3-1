import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

export const badgeVariants = cva(
	'inline-flex items-center justify-center font-bold leading-none whitespace-nowrap rounded-sm',
	{
		variants: {
			variant: {
				primary: 'bg-[#1976d2] text-white',
				secondary: 'bg-[#757575] text-white',
				success: 'bg-[#388e3c] text-white',
				danger: 'bg-[#d32f2f] text-white',
				warning: 'bg-[#f57c00] text-white',
				info: 'bg-[#0288d1] text-white',
			},
			size: {
				small: 'px-1 text-[0.625rem] h-4',
				medium: 'px-2 text-xs h-5',
				large: 'px-2.5 text-[0.8125rem] h-6',
			},
			pill: {
				true: 'rounded-[10px]',
				false: 'rounded-sm',
			},
		},
		defaultVariants: {
			variant: 'primary',
			size: 'medium',
			pill: false,
		},
	},
);

function Badge({
	className,
	variant,
	size,
	pill,
	asChild = false,
	...props
}: React.ComponentProps<'span'> & VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
	const Comp = asChild ? Slot : 'span';

	return (
		<Comp
			data-slot="badge"
			className={cn(badgeVariants({ variant, size, pill }), className)}
			{...props}
		/>
	);
}

export default Badge;
