import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const statsCardVariants = cva(
	'p-3 border rounded-sm',
	{
		variants: {
			color: {
				blue: 'bg-primary-50 border-primary-300 text-primary-500',
				green: 'bg-success-50 border-success-300 text-success-500',
				orange: 'bg-warning-50 border-warning-300 text-warning-500',
				red: 'bg-danger-50 border-danger-300 text-danger-500',
				gray: 'bg-gray-100 border-gray-300 text-gray-700',
			},
		},
		defaultVariants: {
			color: 'gray',
		},
	},
);

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
