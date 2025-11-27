import React, { useState, useEffect } from 'react';
import Button from './ui/button';
import { Alert, Table, Modal } from './organisms';
import { FormInput } from './molecules';
import { FormSelect } from './ui/native-select';
import type { User, UserFormData, TableColumn, PostStatus } from '@/types';
import DashboardCard from '@/components/DashboardCard';
import UserRoleBadge from '@/components/Badge/UserRoleBadge';
import StatusBadge from '@/components/Badge/StatusBadge';
import { useUserManagement } from '@/hooks/useUserManagement';

const UserManagement = () => {
	const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);
	const [selectedUser, setSelectedUser] = useState<User | null>(null);
	const [showSuccessAlert, setShowSuccessAlert] = useState(false);
	const [alertMessage, setAlertMessage] = useState('');
	const [showErrorAlert, setShowErrorAlert] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const [formData, setFormData] = useState<Partial<UserFormData>>({});

	const { users, loadUsers, createUser, updateUser, deleteUser, error } = useUserManagement();

	useEffect(() => {
		loadUsers();
	}, []);

	// Show hook errors in the UI
	useEffect(() => {
		if (error) {
			setErrorMessage(error);
			setShowErrorAlert(true);
		}
	}, [error]);

	const handleCreate = async () => {
		try {
			const userData: UserFormData = {
				username: formData.username!,
				email: formData.email!,
				role: formData.role || 'user',
				status: formData.status || 'active',
			};
			await createUser(userData);

			setIsCreateModalOpen(false);
			setFormData({});
			setAlertMessage('사용자가 생성되었습니다');
			setShowSuccessAlert(true);
		} catch (error: unknown) {
			if (error instanceof Error) {
				setErrorMessage(error.message);
			} else {
				setErrorMessage('생성에 실패했습니다');
			}
			setShowErrorAlert(true);
		}
	};

	const handleEdit = (user: User) => {
		setSelectedUser(user);
		setFormData({
			username: user.username,
			email: user.email,
			role: user.role,
			status: user.status,
		});
		setIsEditModalOpen(true);
	};

	const handleUpdate = async () => {
		if (!selectedUser) return;

		try {
			await updateUser(selectedUser.id, formData);

			setIsEditModalOpen(false);
			setFormData({});
			setSelectedUser(null);
			setAlertMessage('사용자가 수정되었습니다');
			setShowSuccessAlert(true);
		} catch (error: unknown) {
			if (error instanceof Error) {
				setErrorMessage(error.message);
			} else {
				setErrorMessage('수정에 실패했습니다');
			}
			setShowErrorAlert(true);
		}
	};

	const handleDelete = async (id: number) => {
		if (!confirm('정말 삭제하시겠습니까?')) return;

		try {
			await deleteUser(id);
			setAlertMessage('삭제되었습니다');
			setShowSuccessAlert(true);
		} catch (error: unknown) {
			if (error instanceof Error) {
				setErrorMessage(error.message);
			} else {
				setErrorMessage('삭제에 실패했습니다');
			}
			setShowErrorAlert(true);
		}
	};

	const getStats = () => {
		return {
			total: users.length,
			stat1: {
				label: '활성',
				value: users.filter((u) => u.status === 'active').length,
				color: '#2e7d32',
			},
			stat2: {
				label: '비활성',
				value: users.filter((u) => u.status === 'inactive').length,
				color: '#ed6c02',
			},
			stat3: {
				label: '정지',
				value: users.filter((u) => u.status === 'suspended').length,
				color: '#d32f2f',
			},
			stat4: {
				label: '관리자',
				value: users.filter((u) => u.role === 'admin').length,
				color: '#1976d2',
			},
		};
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
				<div style={{ display: 'flex', gap: '8px' }}>
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

	const stats = getStats();

	return (
		<>
			<div style={{ marginBottom: '15px', textAlign: 'right' }}>
				<Button variant="primary" size="md" onClick={() => setIsCreateModalOpen(true)}>
					새로 만들기
				</Button>
			</div>

			{showSuccessAlert && (
				<div style={{ marginBottom: '10px' }}>
					<Alert variant="success" title="성공" onClose={() => setShowSuccessAlert(false)}>
						{alertMessage}
					</Alert>
				</div>
			)}

			{showErrorAlert && (
				<div style={{ marginBottom: '10px' }}>
					<Alert variant="error" title="오류" onClose={() => setShowErrorAlert(false)}>
						{errorMessage}
					</Alert>
				</div>
			)}

			<div
				style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
					gap: '10px',
					marginBottom: '15px',
				}}
			>
				<DashboardCard label="전체" value={stats.total} color="blue" />
				<DashboardCard label={stats.stat1.label} value={stats.stat1.value} color="green" />
				<DashboardCard label={stats.stat2.label} value={stats.stat2.value} color="orange" />
				<DashboardCard label={stats.stat3.label} value={stats.stat3.value} color="red" />
				<DashboardCard label={stats.stat4.label} value={stats.stat4.value} color="gray" />
			</div>

			<div style={{ border: '1px solid #ddd', background: 'white', overflow: 'auto' }}>
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
				isOpen={isCreateModalOpen}
				onClose={() => {
					setIsCreateModalOpen(false);
					setFormData({});
				}}
				title="새 사용자 만들기"
				size="large"
				showFooter
				footerContent={
					<>
						<Button
							variant="secondary"
							size="md"
							onClick={() => {
								setIsCreateModalOpen(false);
								setFormData({});
							}}
						>
							취소
						</Button>
						<Button variant="primary" size="md" onClick={handleCreate}>
							생성
						</Button>
					</>
				}
			>
				<div>
					<FormInput
						name="username"
						value={formData.username || ''}
						onChange={(value) => setFormData({ ...formData, username: value })}
						label="사용자명"
						placeholder="사용자명을 입력하세요"
						required
						width="full"
						fieldType="username"
					/>
					<FormInput
						name="email"
						value={formData.email || ''}
						onChange={(value) => setFormData({ ...formData, email: value })}
						label="이메일"
						placeholder="이메일을 입력하세요"
						type="email"
						required
						width="full"
						fieldType="email"
					/>
					<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
						<FormSelect
							name="role"
							value={formData.role || 'user'}
							onChange={(value) => setFormData({ ...formData, role: value as User['role'] })}
							options={[
								{ value: 'user', label: '사용자' },
								{ value: 'moderator', label: '운영자' },
								{ value: 'admin', label: '관리자' },
							]}
							label="역할"
							size="md"
						/>
						<FormSelect
							name="status"
							value={formData.status || 'active'}
							onChange={(value) => setFormData({ ...formData, status: value as User['status'] })}
							options={[
								{ value: 'active', label: '활성' },
								{ value: 'inactive', label: '비활성' },
								{ value: 'suspended', label: '정지' },
							]}
							label="상태"
							size="md"
						/>
					</div>
				</div>
			</Modal>

			{/* Edit Modal */}
			<Modal
				isOpen={isEditModalOpen}
				onClose={() => {
					setIsEditModalOpen(false);
					setFormData({});
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
								setIsEditModalOpen(false);
								setFormData({});
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
				<div>
					{selectedUser && (
						<Alert variant="info">
							ID: {selectedUser.id} | 생성일: {selectedUser.createdAt}
						</Alert>
					)}

					<FormInput
						name="username"
						value={formData.username || ''}
						onChange={(value) => setFormData({ ...formData, username: value })}
						label="사용자명"
						placeholder="사용자명을 입력하세요"
						required
						width="full"
						fieldType="username"
					/>
					<FormInput
						name="email"
						value={formData.email || ''}
						onChange={(value) => setFormData({ ...formData, email: value })}
						label="이메일"
						placeholder="이메일을 입력하세요"
						type="email"
						required
						width="full"
						fieldType="email"
					/>
					<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
						<FormSelect
							name="role"
							value={formData.role || 'user'}
							onChange={(value) => setFormData({ ...formData, role: value as User['role'] })}
							options={[
								{ value: 'user', label: '사용자' },
								{ value: 'moderator', label: '운영자' },
								{ value: 'admin', label: '관리자' },
							]}
							label="역할"
							size="md"
						/>
						<FormSelect
							name="status"
							value={formData.status || 'active'}
							onChange={(value) => setFormData({ ...formData, status: value as User['status'] })}
							options={[
								{ value: 'active', label: '활성' },
								{ value: 'inactive', label: '비활성' },
								{ value: 'suspended', label: '정지' },
							]}
							label="상태"
							size="md"
						/>
					</div>
				</div>
			</Modal>
		</>
	);
};

export default UserManagement;
