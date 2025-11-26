const StatsCard = ({
	label,
	value,
	color,
}: {
	label: string;
	value: number;
	color: 'blue' | 'green' | 'orange' | 'red' | 'gray';
}) => {
	const getColorCodes = () => {
		switch (color) {
			case 'blue':
				return { background: '#e3f2fd', border: '#90caf9', text: '#1976d2' };
			case 'green':
				return { background: '#e8f5e9', border: '#81c784', text: '#388e3c' };
			case 'orange':
				return { background: '#fff3e0', border: '#ffb74d', text: '#f57c00' };
			case 'red':
				return { background: '#ffebee', border: '#e57373', text: '#d32f2f' };
			default:
				return { background: '#f5f5f5', border: '#bdbdbd', text: '#424242' };
		}
	};

	const { background, border, text } = getColorCodes();

	return (
		<div
			style={{
				padding: '12px 15px',
				background: background,
				border: `1px solid ${border}`,
				borderRadius: '3px',
			}}
		>
			<div style={{ fontSize: '12px', color: '#666', marginBottom: '4px' }}>{label}</div>
			<div style={{ fontSize: '24px', fontWeight: 'bold', color: text }}>{value}</div>
		</div>
	);
};

export default StatsCard;
