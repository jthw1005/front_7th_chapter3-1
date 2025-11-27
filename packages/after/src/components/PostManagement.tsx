import React, { useState, useEffect } from 'react';
import Button from './ui/button';
import { Alert, Table, Modal } from './organisms';
import { FormInput, FormTextarea } from './molecules';
import { FormSelect } from './ui/native-select';
import type { Post, PostFormData, TableColumn } from '@/types';
import StatusBadge from '@/components/Badge/StatusBadge';
import CategoryBadge from '@/components/Badge/CategoryBadge';
import { usePostManagement } from '@/hooks/usePostManagement';
import DashboardCard from '@/components/DashboardCard';

const PostManagement: React.FC = () => {
	const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);
	const [selectedPost, setSelectedPost] = useState<Post | null>(null);
	const [showSuccessAlert, setShowSuccessAlert] = useState(false);
	const [alertMessage, setAlertMessage] = useState('');
	const [showErrorAlert, setShowErrorAlert] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const [formData, setFormData] = useState<Partial<PostFormData>>({});

	const {
		posts,
		loadPosts,
		createPost,
		updatePost,
		deletePost,
		publishPost,
		archivePost,
		restorePost,
		error,
	} = usePostManagement();

	useEffect(() => {
		loadPosts();
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
			const postData: PostFormData = {
				title: formData.title!,
				content: formData.content || '',
				author: formData.author!,
				category: formData.category!,
				status: formData.status || 'draft',
			};
			await createPost(postData);

			setIsCreateModalOpen(false);
			setFormData({});
			setAlertMessage('게시글이 생성되었습니다');
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

	const handleEdit = (post: Post) => {
		setSelectedPost(post);
		setFormData({
			title: post.title,
			content: post.content,
			author: post.author,
			category: post.category,
			status: post.status,
		});
		setIsEditModalOpen(true);
	};

	const handleUpdate = async () => {
		if (!selectedPost) return;

		try {
			await updatePost(selectedPost.id, formData);

			setIsEditModalOpen(false);
			setFormData({});
			setSelectedPost(null);
			setAlertMessage('게시글이 수정되었습니다');
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
			await deletePost(id);
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

	const handleStatusAction = async (id: number, action: 'publish' | 'archive' | 'restore') => {
		try {
			if (action === 'publish') {
				await publishPost(id);
			} else if (action === 'archive') {
				await archivePost(id);
			} else if (action === 'restore') {
				await restorePost(id);
			}

			const message = action === 'publish' ? '게시' : action === 'archive' ? '보관' : '복원';
			setAlertMessage(`${message}되었습니다`);
			setShowSuccessAlert(true);
		} catch (error: unknown) {
			if (error instanceof Error) {
				setErrorMessage(error.message);
			} else {
				setErrorMessage('작업에 실패했습니다');
			}
			setShowErrorAlert(true);
		}
	};

	const getStats = () => {
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
	};

	const columns: TableColumn<Post>[] = [
		{ key: 'id', header: 'ID', width: '60px' },
		{ key: 'title', header: '제목' },
		{ key: 'author', header: '작성자', width: '120px' },
		{ key: 'category', header: '카테고리', width: '140px' },
		{ key: 'status', header: '상태', width: '120px' },
		{ key: 'views', header: '조회수', width: '100px' },
		{ key: 'createdAt', header: '작성일', width: '120px' },
		{ key: 'actions', header: '관리', width: '250px' },
	];

	const renderCell = (row: Post, column: TableColumn<Post>): React.ReactNode => {
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
						<Button
							size="sm"
							variant="success"
							onClick={() => handleStatusAction(row.id, 'publish')}
						>
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
						<Button
							size="sm"
							variant="primary"
							onClick={() => handleStatusAction(row.id, 'restore')}
						>
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
					data={posts}
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
				title="새 게시글 만들기"
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
							onChange={(value) =>
								setFormData({ ...formData, category: value as Post['category'] })
							}
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
				</div>
			</Modal>

			{/* Edit Modal */}
			<Modal
				isOpen={isEditModalOpen}
				onClose={() => {
					setIsEditModalOpen(false);
					setFormData({});
					setSelectedPost(null);
				}}
				title="게시글 수정"
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
								setSelectedPost(null);
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
					{selectedPost && (
						<Alert variant="info">
							ID: {selectedPost.id} | 생성일: {selectedPost.createdAt} | 조회수:{' '}
							{selectedPost.views}
						</Alert>
					)}

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
							onChange={(value) =>
								setFormData({ ...formData, category: value as Post['category'] })
							}
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
				</div>
			</Modal>
		</>
	);
};

export default PostManagement;
