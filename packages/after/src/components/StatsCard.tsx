import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const statsCardVariants = cva('p-3 border rounded-sm', {
	variants: {
		color: {
			blue: 'bg-primary-100 border-primary-500 text-primary-500',
			green: 'bg-success-100 border-success-500 text-success-500',
			orange: 'bg-warning-100 border-warning-500 text-warning-500',
			red: 'bg-danger-100 border-danger-500 text-danger-500',
			gray: 'bg-secondary-100 border-gray-500 text-gray-700',
		},
	},
	defaultVariants: {
		color: 'gray',
	},
});

interface StatsCardProps extends VariantProps<typeof statsCardVariants> {
	label: string;
	value: number;
	className?: string;
}

const StatsCard = ({ label, value, color, className }: StatsCardProps) => {
	return (
		<div className={cn(statsCardVariants({ color }), className)}>
			<div className="text-xs text-gray-600 mb-1">{label}</div>
			<div className="text-2xl font-bold">{value}</div>
		</div>
	);
};

export default StatsCard;
