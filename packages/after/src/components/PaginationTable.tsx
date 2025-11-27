import * as React from 'react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import type { TableColumn } from '@/types/components';

interface PaginationTableProps<T> {
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
	className?: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function PaginationTable<T extends Record<string, any>>({
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
	className,
}: PaginationTableProps<T>) {
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

	const tableClasses = cn(
		'table',
		striped && 'table-striped',
		bordered && 'table-bordered',
		hover && 'table-hover',
		className,
	);

	const defaultRenderCell = (row: T, column: TableColumn<T>): React.ReactNode => {
		const value = row[column.key as keyof T];
		if (React.isValidElement(value)) {
			return value;
		}
		return String(value ?? '');
	};

	return (
		<div className="table-container">
			{searchable && (
				<div className="mb-4">
					<input
						type="text"
						placeholder="검색..."
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						className="px-3 py-2 border border-gray-300 rounded w-[300px]"
					/>
				</div>
			)}

			<table className={tableClasses}>
				<TableHeader>
					<TableRow>
						{columns.map((column) => (
							<TableHead
								key={String(column.key)}
								style={column.width ? { width: column.width } : undefined}
								onClick={() => sortable && column.sortable !== false && handleSort(column.key)}
								className={sortable && column.sortable !== false ? 'cursor-pointer' : ''}
							>
								<div className="flex items-center gap-1">
									{column.header}
									{sortable && sortColumn === column.key && (
										<span>{sortDirection === 'asc' ? '↑' : '↓'}</span>
									)}
								</div>
							</TableHead>
						))}
					</TableRow>
				</TableHeader>
				<TableBody>
					{paginatedData.map((row, rowIndex) => (
						<TableRow
							key={getRowKey(row, rowIndex)}
							onClick={() => onRowClick?.(row)}
							className={onRowClick ? 'cursor-pointer' : ''}
						>
							{columns.map((column) => (
								<TableCell key={String(column.key)}>
									{renderCell ? renderCell(row, column) : defaultRenderCell(row, column)}
								</TableCell>
							))}
						</TableRow>
					))}
				</TableBody>
			</table>

			{totalPages > 1 && (
				<div className="mt-4 flex gap-2 justify-center">
					<button
						onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
						disabled={currentPage === 1}
						className="px-3 py-1.5 border border-gray-300 bg-white rounded disabled:cursor-not-allowed disabled:opacity-50"
					>
						이전
					</button>
					<span className="px-3 py-1.5">
						{currentPage} / {totalPages}
					</span>
					<button
						onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
						disabled={currentPage === totalPages}
						className="px-3 py-1.5 border border-gray-300 bg-white rounded disabled:cursor-not-allowed disabled:opacity-50"
					>
						다음
					</button>
				</div>
			)}
		</div>
	);
}

export { PaginationTable };
