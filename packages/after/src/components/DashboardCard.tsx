import { cva, type VariantProps } from 'class-variance-authority';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export const statsCardVariants = cva('', {
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
});

interface DashboardCardProps extends VariantProps<typeof statsCardVariants> {
	label: string;
	value: number;
	className?: string;
}

const DashboardCard = ({ label, value, color, className }: DashboardCardProps) => {
	return (
		<Card className={cn('p-0 py-3 shadow-none rounded-sm', statsCardVariants({ color }), className)}>
			<CardContent className="px-3 py-0">
				<div className="text-xs text-gray-600 mb-1">{label}</div>
				<div className="text-2xl font-bold">{value}</div>
			</CardContent>
		</Card>
	);
};

export default DashboardCard;
