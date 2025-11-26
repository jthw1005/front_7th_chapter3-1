import { cva } from 'class-variance-authority';
import { type JSX, type ReactNode } from 'react';

import { cn } from '@/lib/utils';

type TextType =
	| 'heading1'
	| 'heading2'
	| 'heading3'
	| 'heading4'
	| 'heading5'
	| 'heading6'
	| 'subHeading1'
	| 'subHeading2'
	| 'subHeading3'
	| 'title1'
	| 'title2'
	| 'body1'
	| 'body2'
	| 'caption1'
	| 'caption2'
	| 'button1'
	| 'button2';

export interface TextProps {
	textType?: TextType;
	children?: ReactNode;
	className?: string;
}

const elementMap: Record<TextType, keyof JSX.IntrinsicElements> = {
	heading1: 'h1',
	heading2: 'h2',
	heading3: 'h3',
	heading4: 'h4',
	heading5: 'h5',
	heading6: 'h6',
	subHeading1: 'h3',
	subHeading2: 'h5',
	subHeading3: 'h6',
	title1: 'span',
	title2: 'span',
	body1: 'span',
	body2: 'span',
	caption1: 'span',
	caption2: 'span',
	button1: 'span',
	button2: 'span',
};

export const textVariants = cva('box-border', {
	variants: {
		type: {
			heading1: 'text-[40px] font-[700] -tracking-[0.8px]',
			heading2: 'text-[36px] font-[700] -tracking-[0.72px]',
			heading3: 'text-[28px] font-[700] -tracking-[0.56px]',
			heading4: 'text-[24px] font-[700] -tracking-[0.48px]',
			heading5: 'text-[20px] font-[700] -tracking-[0.4px]',
			heading6: 'text-[18px] font-[700] -tracking-[0.36px]',
			subHeading1: 'text-[28px] font-[500] -tracking-[0.56px]',
			subHeading2: 'text-[20px] font-[500] -tracking-[0.4px]',
			subHeading3: 'text-[18px] font-[500] -tracking-[0.36px]',
			title1: 'text-[16px] font-[700] -tracking-[0.32px]',
			title2: 'text-[14px] font-[700] -tracking-[0.28px]',
			body1: 'text-[16px] font-[400] -tracking-[0.32px]',
			body2: 'text-[14px] font-[400] -tracking-[0.28px]',
			caption1: 'text-[12px] font-[400] -tracking-[0.24px]',
			caption2: 'text-[10px] font-[400] -tracking-[0.2px]',
			button1: 'text-[16px] font-[500] -tracking-[0.32px]',
			button2: 'text-[14px] font-[500] -tracking-[0.28px]',
		},
	},
	defaultVariants: {
		type: 'body2',
	},
});

const Text = ({ textType = 'body2', className, children }: TextProps) => {
	const Element = elementMap[textType];

	return <Element className={cn(textVariants({ type: textType }), className)}>{children}</Element>;
};

export default Text;
