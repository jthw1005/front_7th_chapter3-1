import React, { useState, useEffect } from 'react';
import Button from '../components/ui/button';
import { Alert, Table, Modal } from '../components/organisms';
import { FormInput, FormSelect, FormTextarea } from '../components/molecules';
import type { User, Post, PostStatus, TableColumn, UserFormData, PostFormData } from '@/types';
import '../styles/components.css';
import StatsCard from '@/components/StatsCard';
import UserRoleBadge from '@/components/Badge/UserRoleBadge';
import StatusBadge from '@/components/Badge/StatusBadge';
import CategoryBadge from '@/components/Badge/CategoryBadge';
import { useUserManagement } from '@/hooks/useUserManagement';
import { usePostManagement } from '@/hooks/usePostManagement';

type EntityType = 'user' | 'post';
type Entity = User | Post;

const ManagementPage: React.FC = () => {
	const [entityType, setEntityType] = useState<EntityType>('post');
	const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);
	const [selectedItem, setSelectedItem] = useState<Entity | null>(null);
	const [showSuccessAlert, setShowSuccessAlert] = useState(false);
	const [alertMessage, setAlertMessage] = useState('');
	const [showErrorAlert, setShowErrorAlert] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	const [formData, setFormData] = useState<any>({});

	// Use custom hooks for business logic
	const userManagement = useUserManagement();
	const postManagement = usePostManagement();

	// Get current data based on entity type
	const data = entityType === 'user' ? userManagement.users : postManagement.posts;
	const hookError = entityType === 'user' ? userManagement.error : postManagement.error;

	useEffect(() => {
		loadData();
		setFormData({});
		setIsCreateModalOpen(false);
		setIsEditModalOpen(false);
		setSelectedItem(null);
	}, [entityType]);

	// Show hook errors in the UI
	useEffect(() => {
		if (hookError) {
			setErrorMessage(hookError);
			setShowErrorAlert(true);
		}
	}, [hookError]);

	const loadData = async () => {
		if (entityType === 'user') {
			await userManagement.loadUsers();
		} else {
			await postManagement.loadPosts();
		}
	};

	const handleCreate = async () => {
		try {
			if (entityType === 'user') {
				const userData: UserFormData = {
					username: formData.username,
					email: formData.email,
					role: formData.role || 'user',
					status: formData.status || 'active',
				};
				await userManagement.createUser(userData);
			} else {
				const postData: PostFormData = {
					title: formData.title,
					content: formData.content || '',
					author: formData.author,
					category: formData.category,
					status: formData.status || 'draft',
				};
				await postManagement.createPost(postData);
			}

			setIsCreateModalOpen(false);
			setFormData({});
			setAlertMessage(`${entityType === 'user' ? '사용자' : '게시글'}가 생성되었습니다`);
			setShowSuccessAlert(true);
		} catch (error: any) {
			setErrorMessage(error.message || '생성에 실패했습니다');
			setShowErrorAlert(true);
		}
	};

	const handleEdit = (item: Entity) => {
		setSelectedItem(item);

		if (entityType === 'user') {
			const user = item as User;
			setFormData({
				username: user.username,
				email: user.email,
				role: user.role,
				status: user.status,
			});
		} else {
			const post = item as Post;
			setFormData({
				title: post.title,
				content: post.content,
				author: post.author,
				category: post.category,
				status: post.status,
			});
		}

		setIsEditModalOpen(true);
	};

	const handleUpdate = async () => {
		if (!selectedItem) return;

		try {
			if (entityType === 'user') {
				await userManagement.updateUser(selectedItem.id, formData);
			} else {
				await postManagement.updatePost(selectedItem.id, formData);
			}

			setIsEditModalOpen(false);
			setFormData({});
			setSelectedItem(null);
			setAlertMessage(`${entityType === 'user' ? '사용자' : '게시글'}가 수정되었습니다`);
			setShowSuccessAlert(true);
		} catch (error: any) {
			setErrorMessage(error.message || '수정에 실패했습니다');
			setShowErrorAlert(true);
		}
	};

	const handleDelete = async (id: number) => {
		if (!confirm('정말 삭제하시겠습니까?')) return;

		try {
			if (entityType === 'user') {
				await userManagement.deleteUser(id);
			} else {
				await postManagement.deletePost(id);
			}

			setAlertMessage('삭제되었습니다');
			setShowSuccessAlert(true);
		} catch (error: any) {
			setErrorMessage(error.message || '삭제에 실패했습니다');
			setShowErrorAlert(true);
		}
	};

	const handleStatusAction = async (id: number, action: 'publish' | 'archive' | 'restore') => {
		if (entityType !== 'post') return;

		try {
			if (action === 'publish') {
				await postManagement.publishPost(id);
			} else if (action === 'archive') {
				await postManagement.archivePost(id);
			} else if (action === 'restore') {
				await postManagement.restorePost(id);
			}

			const message = action === 'publish' ? '게시' : action === 'archive' ? '보관' : '복원';
			setAlertMessage(`${message}되었습니다`);
			setShowSuccessAlert(true);
		} catch (error: any) {
			setErrorMessage(error.message || '작업에 실패했습니다');
			setShowErrorAlert(true);
		}
	};

	const getStats = () => {
		if (entityType === 'user') {
			const users = data as User[];
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
		} else {
			const posts = data as Post[];
			return {
				total: posts.length,
				stat1: {
					label: '게시됨',
					value: posts.filter((p) => p.status === 'published').length,
					color: '#2e7d32',
				},
				stat2: {
					label: '임시저장',
					value: posts.filter((p) => p.status === 'draft').length,
					color: '#ed6c02',
				},
				stat3: {
					label: '보관됨',
					value: posts.filter((p) => p.status === 'archived').length,
					color: 'rgba(0, 0, 0, 0.6)',
				},
				stat4: {
					label: '총 조회수',
					value: posts.reduce((sum, p) => sum + p.views, 0),
					color: '#1976d2',
				},
			};
		}
	};

	const userColumns: TableColumn<User>[] = [
		{ key: 'id', header: 'ID', width: '60px' },
		{ key: 'username', header: '사용자명', width: '150px' },
		{ key: 'email', header: '이메일' },
		{ key: 'role', header: '역할', width: '120px' },
		{ key: 'status', header: '상태', width: '120px' },
		{ key: 'createdAt', header: '생성일', width: '120px' },
		{ key: 'lastLogin', header: '마지막 로그인', width: '140px' },
		{ key: 'actions', header: '관리', width: '200px' },
	];

	const postColumns: TableColumn<Post>[] = [
		{ key: 'id', header: 'ID', width: '60px' },
		{ key: 'title', header: '제목' },
		{ key: 'author', header: '작성자', width: '120px' },
		{ key: 'category', header: '카테고리', width: '140px' },
		{ key: 'status', header: '상태', width: '120px' },
		{ key: 'views', header: '조회수', width: '100px' },
		{ key: 'createdAt', header: '작성일', width: '120px' },
		{ key: 'actions', header: '관리', width: '250px' },
	];

	const renderUserCell = (row: User, column: TableColumn<User>): React.ReactNode => {
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

	const renderPostCell = (row: Post, column: TableColumn<Post>): React.ReactNode => {
		const columnKey = column.key;

		if (columnKey === 'category') {
			return <CategoryBadge category={row.category} />;
		}

		if (columnKey === 'status') {
			return <StatusBadge status={row.status} />;
		}

		if (columnKey === 'views') {
			return row.views?.toLocaleString() || '0';
		}

		if (columnKey === 'actions') {
			return (
				<div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
					<Button size="sm" variant="primary" onClick={() => handleEdit(row)}>
						수정
					</Button>
					{row.status === 'draft' && (
						<Button size="sm" variant="success" onClick={() => handleStatusAction(row.id, 'publish')}>
							게시
						</Button>
					)}
					{row.status === 'published' && (
						<Button
							size="sm"
							variant="secondary"
							onClick={() => handleStatusAction(row.id, 'archive')}
						>
							보관
						</Button>
					)}
					{row.status === 'archived' && (
						<Button size="sm" variant="primary" onClick={() => handleStatusAction(row.id, 'restore')}>
							복원
						</Button>
					)}
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
		<div className="min-h-screen bg-[#f0f0f0]">
			<div className="max-w-[1200px] mx-auto p-[20px]">
				<div className="mb-[20px]">
					<h1 className="text-[24px] font-bold mb-[5px] text-[#333]">관리 시스템</h1>
					<p className="text-[14px] text-[#666]">사용자와 게시글을 관리하세요</p>
				</div>

				<div className="bg-white border border-[#ddd] p-[10px]">
					<div className="mb-[15px] border-b border-[#ccc] pb-[5px] flex gap-[5px]">
						<Button
							onClick={() => setEntityType('post')}
							variant={entityType === 'post' ? 'primary' : 'secondary'}
							size="sm"
							className="border-[#999] font-bold"
						>
							게시글
						</Button>
						<Button
							onClick={() => setEntityType('user')}
							variant={entityType === 'user' ? 'primary' : 'secondary'}
							size="sm"
							className="border-[#999] font-bold"
						>
							사용자
						</Button>
					</div>

					<div>
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
							<StatsCard label="전체" value={stats.total} color="blue" />
							<StatsCard label={stats.stat1.label} value={stats.stat1.value} color="green" />
							<StatsCard label={stats.stat2.label} value={stats.stat2.value} color="orange" />
							<StatsCard label={stats.stat3.label} value={stats.stat3.value} color="red" />
							<StatsCard label={stats.stat4.label} value={stats.stat4.value} color="gray" />
						</div>

						<div style={{ border: '1px solid #ddd', background: 'white', overflow: 'auto' }}>
							{entityType === 'user' ? (
								<Table
									columns={userColumns}
									data={data as User[]}
									striped
									hover
									renderCell={renderUserCell}
									getRowKey={(row) => row.id}
								/>
							) : (
								<Table
									columns={postColumns}
									data={data as Post[]}
									striped
									hover
									renderCell={renderPostCell}
									getRowKey={(row) => row.id}
								/>
							)}
						</div>
					</div>
				</div>
			</div>

			{/* Create Modal */}
			<Modal
				isOpen={isCreateModalOpen}
				onClose={() => {
					setIsCreateModalOpen(false);
					setFormData({});
				}}
				title={`새 ${entityType === 'user' ? '사용자' : '게시글'} 만들기`}
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
					{entityType === 'user' ? (
						<>
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
									onChange={(value) => setFormData({ ...formData, role: value })}
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
									onChange={(value) => setFormData({ ...formData, status: value })}
									options={[
										{ value: 'active', label: '활성' },
										{ value: 'inactive', label: '비활성' },
										{ value: 'suspended', label: '정지' },
									]}
									label="상태"
									size="md"
								/>
							</div>
						</>
					) : (
						<>
							<FormInput
								name="title"
								value={formData.title || ''}
								onChange={(value) => setFormData({ ...formData, title: value })}
								label="제목"
								placeholder="게시글 제목을 입력하세요"
								required
								width="full"
								fieldType="postTitle"
							/>
							<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
								<FormInput
									name="author"
									value={formData.author || ''}
									onChange={(value) => setFormData({ ...formData, author: value })}
									label="작성자"
									placeholder="작성자명"
									required
									width="full"
								/>
								<FormSelect
									name="category"
									value={formData.category || ''}
									onChange={(value) => setFormData({ ...formData, category: value })}
									options={[
										{ value: 'development', label: 'Development' },
										{ value: 'design', label: 'Design' },
										{ value: 'accessibility', label: 'Accessibility' },
									]}
									label="카테고리"
									placeholder="카테고리 선택"
									size="md"
								/>
							</div>
							<FormTextarea
								name="content"
								value={formData.content || ''}
								onChange={(value) => setFormData({ ...formData, content: value })}
								label="내용"
								placeholder="게시글 내용을 입력하세요"
								rows={6}
							/>
						</>
					)}
				</div>
			</Modal>

			{/* Edit Modal */}
			<Modal
				isOpen={isEditModalOpen}
				onClose={() => {
					setIsEditModalOpen(false);
					setFormData({});
					setSelectedItem(null);
				}}
				title={`${entityType === 'user' ? '사용자' : '게시글'} 수정`}
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
								setSelectedItem(null);
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
					{selectedItem && (
						<Alert variant="info">
							ID: {selectedItem.id} | 생성일: {selectedItem.createdAt}
							{entityType === 'post' && ` | 조회수: ${(selectedItem as Post).views}`}
						</Alert>
					)}

					{entityType === 'user' ? (
						<>
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
									onChange={(value) => setFormData({ ...formData, role: value })}
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
									onChange={(value) => setFormData({ ...formData, status: value })}
									options={[
										{ value: 'active', label: '활성' },
										{ value: 'inactive', label: '비활성' },
										{ value: 'suspended', label: '정지' },
									]}
									label="상태"
									size="md"
								/>
							</div>
						</>
					) : (
						<>
							<FormInput
								name="title"
								value={formData.title || ''}
								onChange={(value) => setFormData({ ...formData, title: value })}
								label="제목"
								placeholder="게시글 제목을 입력하세요"
								required
								width="full"
								fieldType="postTitle"
							/>
							<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
								<FormInput
									name="author"
									value={formData.author || ''}
									onChange={(value) => setFormData({ ...formData, author: value })}
									label="작성자"
									placeholder="작성자명"
									required
									width="full"
								/>
								<FormSelect
									name="category"
									value={formData.category || ''}
									onChange={(value) => setFormData({ ...formData, category: value })}
									options={[
										{ value: 'development', label: 'Development' },
										{ value: 'design', label: 'Design' },
										{ value: 'accessibility', label: 'Accessibility' },
									]}
									label="카테고리"
									placeholder="카테고리 선택"
									size="md"
								/>
							</div>
							<FormTextarea
								name="content"
								value={formData.content || ''}
								onChange={(value) => setFormData({ ...formData, content: value })}
								label="내용"
								placeholder="게시글 내용을 입력하세요"
								rows={6}
							/>
						</>
					)}
				</div>
			</Modal>
		</div>
	);
};

export default ManagementPage;
