import React, { useState, useEffect } from 'react';
import type { TableColumn } from '@/types/components';

interface TableProps<T> {
	columns: TableColumn<T>[];
	data: T[];
	striped?: boolean;
	bordered?: boolean;
	hover?: boolean;
	pageSize?: number;
	searchable?: boolean;
	sortable?: boolean;
	onRowClick?: (row: T) => void;
	renderCell?: (row: T, column: TableColumn<T>) => React.ReactNode;
	getRowKey?: (row: T, index: number) => string | number;
}

export function Table<T extends Record<string, any>>({
	columns,
	data = [],
	striped = false,
	bordered = false,
	hover = false,
	pageSize = 10,
	searchable = false,
	sortable = false,
	onRowClick,
	renderCell,
	getRowKey = (_, index) => index,
}: TableProps<T>) {
	const [tableData, setTableData] = useState<T[]>(data);
	const [currentPage, setCurrentPage] = useState(1);
	const [searchTerm, setSearchTerm] = useState('');
	const [sortColumn, setSortColumn] = useState<keyof T | ''>('');
	const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

	useEffect(() => {
		setTableData(data);
	}, [data]);

	const handleSort = (columnKey: keyof T) => {
		if (!sortable) return;

		const newDirection = sortColumn === columnKey && sortDirection === 'asc' ? 'desc' : 'asc';
		setSortColumn(columnKey);
		setSortDirection(newDirection);

		const sorted = [...tableData].sort((a, b) => {
			const aVal = a[columnKey];
			const bVal = b[columnKey];

			if (typeof aVal === 'number' && typeof bVal === 'number') {
				return newDirection === 'asc' ? aVal - bVal : bVal - aVal;
			}

			return newDirection === 'asc'
				? String(aVal).localeCompare(String(bVal))
				: String(bVal).localeCompare(String(aVal));
		});

		setTableData(sorted);
	};

	const filteredData =
		searchable && searchTerm
			? tableData.filter((row) =>
					Object.values(row).some((val) =>
						String(val).toLowerCase().includes(searchTerm.toLowerCase()),
					),
				)
			: tableData;

	const paginatedData = filteredData.slice((currentPage - 1) * pageSize, currentPage * pageSize);

	const totalPages = Math.ceil(filteredData.length / pageSize);

	const tableClasses = [
		'table',
		striped && 'table-striped',
		bordered && 'table-bordered',
		hover && 'table-hover',
	]
		.filter(Boolean)
		.join(' ');

	const defaultRenderCell = (row: T, column: TableColumn<T>): React.ReactNode => {
		const value = row[column.key as keyof T];

		// React Element면 그대로 렌더링
		if (React.isValidElement(value)) {
			return value;
		}

		return value;
	};

	return (
		<div className="table-container">
			{searchable && (
				<div style={{ marginBottom: '16px' }}>
					<input
						type="text"
						placeholder="검색..."
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						style={{
							padding: '8px 12px',
							border: '1px solid #ddd',
							borderRadius: '4px',
							width: '300px',
						}}
					/>
				</div>
			)}

			<table className={tableClasses}>
				<thead>
					<tr>
						{columns.map((column) => (
							<th
								key={String(column.key)}
								style={column.width ? { width: column.width } : undefined}
								onClick={() => sortable && column.sortable !== false && handleSort(column.key)}
							>
								<div
									style={{
										display: 'flex',
										alignItems: 'center',
										gap: '4px',
										cursor: sortable && column.sortable !== false ? 'pointer' : 'default',
									}}
								>
									{column.header}
									{sortable && sortColumn === column.key && (
										<span>{sortDirection === 'asc' ? '↑' : '↓'}</span>
									)}
								</div>
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{paginatedData.map((row, rowIndex) => (
						<tr
							key={getRowKey(row, rowIndex)}
							onClick={() => onRowClick?.(row)}
							style={{ cursor: onRowClick ? 'pointer' : 'default' }}
						>
							{columns.map((column) => (
								<td key={String(column.key)}>
									{renderCell ? renderCell(row, column) : defaultRenderCell(row, column)}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>

			{totalPages > 1 && (
				<div
					style={{
						marginTop: '16px',
						display: 'flex',
						gap: '8px',
						justifyContent: 'center',
					}}
				>
					<button
						onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
						disabled={currentPage === 1}
						style={{
							padding: '6px 12px',
							border: '1px solid #ddd',
							background: 'white',
							borderRadius: '4px',
							cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
						}}
					>
						이전
					</button>
					<span style={{ padding: '6px 12px' }}>
						{currentPage} / {totalPages}
					</span>
					<button
						onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
						disabled={currentPage === totalPages}
						style={{
							padding: '6px 12px',
							border: '1px solid #ddd',
							background: 'white',
							borderRadius: '4px',
							cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
						}}
					>
						다음
					</button>
				</div>
			)}
		</div>
	);
}
