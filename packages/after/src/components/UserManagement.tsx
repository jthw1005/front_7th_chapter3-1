import { useState, useEffect, useMemo } from 'react';

import Button from '@/components/ui/button';
import { Alert } from '@/components/Alert';
import { Table } from '@/components/ui/table';
import { Modal } from '@/components/Modal';
import type { User, UserFormData, TableColumn, PostStatus } from '@/types';
import DashboardCard, { statsCardVariants } from '@/components/DashboardCard';
import UserRoleBadge from '@/components/Badge/UserRoleBadge';
import StatusBadge from '@/components/Badge/StatusBadge';
import { useUserManagement } from '@/hooks/useUserManagement';
import { useAlert } from '@/hooks/useAlert';
import { useFormModal } from '@/hooks/useFormModal';
import { UserFormFields } from '@/components/management/UserFormFields';
import type { VariantProps } from 'class-variance-authority';

const UserManagement = () => {
	const [selectedUser, setSelectedUser] = useState<User | null>(null);

	const { users, loadUsers, createUser, updateUser, deleteUser, error } = useUserManagement();

	const alert = useAlert();
	const createModal = useFormModal<UserFormData>();
	const editModal = useFormModal<UserFormData>();

	useEffect(() => {
		loadUsers();
	}, []);

	useEffect(() => {
		if (error) {
			alert.displayError(error);
		}
	}, [error, alert]);

	const handleCreate = async () => {
		try {
			const userData: UserFormData = {
				username: createModal.formData.username!,
				email: createModal.formData.email!,
				role: createModal.formData.role || 'user',
				status: createModal.formData.status || 'active',
			};
			await createUser(userData);

			createModal.close();
			alert.displaySuccess('사용자가 생성되었습니다');
		} catch (error: unknown) {
			if (error instanceof Error) {
				alert.displayError(error.message);
			} else {
				alert.displayError('생성에 실패했습니다');
			}
		}
	};

	const handleEdit = (user: User) => {
		setSelectedUser(user);
		editModal.open({
			username: user.username,
			email: user.email,
			role: user.role,
			status: user.status,
		});
	};

	const handleUpdate = async () => {
		if (!selectedUser) return;

		try {
			await updateUser(selectedUser.id, editModal.formData);

			editModal.close();
			setSelectedUser(null);
			alert.displaySuccess('사용자가 수정되었습니다');
		} catch (error: unknown) {
			if (error instanceof Error) {
				alert.displayError(error.message);
			} else {
				alert.displayError('수정에 실패했습니다');
			}
		}
	};

	const handleDelete = async (id: number) => {
		if (!confirm('정말 삭제하시겠습니까?')) return;

		try {
			await deleteUser(id);
			alert.displaySuccess('삭제되었습니다');
		} catch (error: unknown) {
			if (error instanceof Error) {
				alert.displayError(error.message);
			} else {
				alert.displayError('삭제에 실패했습니다');
			}
		}
	};

	const renderCell = (row: User, column: TableColumn<User>): React.ReactNode => {
		const columnKey = column.key;

		if (columnKey === 'role') {
			return <UserRoleBadge userRole={row.role} />;
		}

		if (columnKey === 'status') {
			const statusMap: Record<User['status'], PostStatus> = {
				active: 'published',
				inactive: 'draft',
				suspended: 'rejected',
			};
			return <StatusBadge status={statusMap[row.status]} />;
		}

		if (columnKey === 'lastLogin') {
			return row.lastLogin || '-';
		}

		if (columnKey === 'actions') {
			return (
				<div className="flex gap-2">
					<Button size="sm" variant="primary" onClick={() => handleEdit(row)}>
						수정
					</Button>
					<Button size="sm" variant="danger" onClick={() => handleDelete(row.id)}>
						삭제
					</Button>
				</div>
			);
		}

		return row[columnKey];
	};

	const columns: TableColumn<User>[] = [
		{ key: 'id', header: 'ID', width: '60px' },
		{ key: 'username', header: '사용자명', width: '150px' },
		{ key: 'email', header: '이메일' },
		{ key: 'role', header: '역할', width: '120px' },
		{ key: 'status', header: '상태', width: '120px' },
		{ key: 'createdAt', header: '생성일', width: '120px' },
		{ key: 'lastLogin', header: '마지막 로그인', width: '140px' },
		{ key: 'actions', header: '관리', width: '200px' },
	];

	const statList: {
		label: string;
		value: number;
		color: VariantProps<typeof statsCardVariants>['color'];
	}[] = useMemo(
		() => [
			{
				label: '전체',
				value: users.length,
				color: 'blue',
			},
			{
				label: '활성',
				value: users.filter((u) => u.status === 'active').length,
				color: 'green',
			},
			{
				label: '비활성',
				value: users.filter((u) => u.status === 'inactive').length,
				color: 'orange',
			},
			{
				label: '정지',
				value: users.filter((u) => u.status === 'suspended').length,
				color: 'red',
			},
			{
				label: '관리자',
				value: users.filter((u) => u.role === 'admin').length,
				color: 'gray',
			},
		],
		[users],
	);

	return (
		<>
			<div className="mb-4 text-right">
				<Button variant="primary" size="md" onClick={() => createModal.open()}>
					새로 만들기
				</Button>
			</div>

			{alert.showSuccess && (
				<div className="mb-2.5">
					<Alert variant="success" title="성공" onClose={alert.hideSuccess}>
						{alert.successMessage}
					</Alert>
				</div>
			)}

			{alert.showError && (
				<div className="mb-2.5">
					<Alert variant="error" title="오류" onClose={alert.hideError}>
						{alert.errorMessage}
					</Alert>
				</div>
			)}

			<div className="grid grid-cols-[repeat(auto-fit,minmax(130px,1fr))] gap-2.5 mb-4">
				{statList.map(({ label, value, color }) => {
					return <DashboardCard key={label} label={label} value={value} color={color} />;
				})}
			</div>

			<div className="border border-gray-300 bg-white overflow-auto">
				<Table
					columns={columns}
					data={users}
					striped
					hover
					renderCell={renderCell}
					getRowKey={(row) => row.id}
				/>
			</div>

			{/* Create Modal */}
			<Modal
				isOpen={createModal.isOpen}
				onClose={createModal.close}
				title="새 사용자 만들기"
				size="large"
				showFooter
				footerContent={
					<>
						<Button variant="secondary" size="md" onClick={createModal.close}>
							취소
						</Button>
						<Button variant="primary" size="md" onClick={handleCreate}>
							생성
						</Button>
					</>
				}
			>
				<UserFormFields formData={createModal.formData} onChange={createModal.updateFormData} />
			</Modal>

			{/* Edit Modal */}
			<Modal
				isOpen={editModal.isOpen}
				onClose={() => {
					editModal.close();
					setSelectedUser(null);
				}}
				title="사용자 수정"
				size="large"
				showFooter
				footerContent={
					<>
						<Button
							variant="secondary"
							size="md"
							onClick={() => {
								editModal.close();
								setSelectedUser(null);
							}}
						>
							취소
						</Button>
						<Button variant="primary" size="md" onClick={handleUpdate}>
							수정 완료
						</Button>
					</>
				}
			>
				<div className="space-y-4">
					{selectedUser && (
						<Alert variant="info">
							ID: {selectedUser.id} | 생성일: {selectedUser.createdAt}
						</Alert>
					)}

					<UserFormFields formData={editModal.formData} onChange={editModal.updateFormData} />
				</div>
			</Modal>
		</>
	);
};

export default UserManagement;
