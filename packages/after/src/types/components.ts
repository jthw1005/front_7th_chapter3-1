import type { ReactNode } from 'react';

// Table Component Types
export interface TableColumn<T> {
	key: keyof T | 'actions';
	header: string;
	width?: string;
	sortable?: boolean;
}

// Form Field Types
export interface FormFieldProps {
	name: string;
	value: string;
	onChange: (value: string) => void;
	label: string;
	error?: string;
	helperText?: string;
	disabled?: boolean;
	required?: boolean;
}

// Modal Types
export interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	title: string;
	children: ReactNode;
	size?: 'small' | 'medium' | 'large';
	showFooter?: boolean;
	footerContent?: ReactNode;
}

// Alert Types
export type AlertVariant = 'info' | 'success' | 'warning' | 'error' | 'default';

export interface AlertProps {
	variant?: AlertVariant;
	title?: string;
	children: ReactNode;
	onClose?: () => void;
}

// Size Types (standardized)
export type Size = 'sm' | 'md' | 'lg';
