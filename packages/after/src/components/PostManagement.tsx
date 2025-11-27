import { useState, useEffect, useMemo } from 'react';

import Button from '@/components/ui/button';
import { Alert } from '@/components/Alert';
import { Table } from '@/components/ui/table';
import { Modal } from '@/components/Modal';
import type { Post, PostFormData, TableColumn } from '@/types';
import StatusBadge from '@/components/Badge/StatusBadge';
import CategoryBadge from '@/components/Badge/CategoryBadge';
import { usePostManagement } from '@/hooks/usePostManagement';
import { useAlert } from '@/hooks/useAlert';
import { useFormModal } from '@/hooks/useFormModal';
import DashboardCard, { statsCardVariants } from '@/components/DashboardCard';
import { PostFormFields } from '@/components/management/PostFormFields';
import type { VariantProps } from 'class-variance-authority';

const PostManagement = () => {
	const [selectedPost, setSelectedPost] = useState<Post | null>(null);

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

	const alert = useAlert();
	const createModal = useFormModal<PostFormData>();
	const editModal = useFormModal<PostFormData>();

	useEffect(() => {
		loadPosts();
	}, []);

	useEffect(() => {
		if (error) {
			alert.displayError(error);
		}
	}, [error, alert]);

	const handleCreate = async () => {
		try {
			const postData: PostFormData = {
				title: createModal.formData.title!,
				content: createModal.formData.content || '',
				author: createModal.formData.author!,
				category: createModal.formData.category!,
				status: createModal.formData.status || 'draft',
			};
			await createPost(postData);

			createModal.close();
			alert.displaySuccess('게시글이 생성되었습니다');
		} catch (error: unknown) {
			if (error instanceof Error) {
				alert.displayError(error.message);
			} else {
				alert.displayError('생성에 실패했습니다');
			}
		}
	};

	const handleEdit = (post: Post) => {
		setSelectedPost(post);
		editModal.open({
			title: post.title,
			content: post.content,
			author: post.author,
			category: post.category,
			status: post.status,
		});
	};

	const handleUpdate = async () => {
		if (!selectedPost) return;

		try {
			await updatePost(selectedPost.id, editModal.formData);

			editModal.close();
			setSelectedPost(null);
			alert.displaySuccess('게시글이 수정되었습니다');
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
			await deletePost(id);
			alert.displaySuccess('삭제되었습니다');
		} catch (error: unknown) {
			if (error instanceof Error) {
				alert.displayError(error.message);
			} else {
				alert.displayError('삭제에 실패했습니다');
			}
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
			alert.displaySuccess(`${message}되었습니다`);
		} catch (error: unknown) {
			if (error instanceof Error) {
				alert.displayError(error.message);
			} else {
				alert.displayError('작업에 실패했습니다');
			}
		}
	};

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
				<div className="flex gap-2 flex-wrap">
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

	const statList: {
		label: string;
		value: number;
		color: VariantProps<typeof statsCardVariants>['color'];
	}[] = useMemo(
		() => [
			{
				label: '전체',
				value: posts.length,
				color: 'blue',
			},
			{
				label: '게시됨',
				value: posts.filter((p) => p.status === 'published').length,
				color: 'green',
			},
			{
				label: '임시저장',
				value: posts.filter((p) => p.status === 'draft').length,
				color: 'orange',
			},
			{
				label: '보관됨',
				value: posts.filter((p) => p.status === 'archived').length,
				color: 'red',
			},
			{
				label: '총 조회수',
				value: posts.reduce((sum, p) => sum + p.views, 0),
				color: 'gray',
			},
		],
		[posts],
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
					data={posts}
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
				title="새 게시글 만들기"
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
				<PostFormFields formData={createModal.formData} onChange={createModal.updateFormData} />
			</Modal>

			{/* Edit Modal */}
			<Modal
				isOpen={editModal.isOpen}
				onClose={() => {
					editModal.close();
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
								editModal.close();
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
				<div className="space-y-4">
					{selectedPost && (
						<Alert variant="info">
							ID: {selectedPost.id} | 생성일: {selectedPost.createdAt} | 조회수:{' '}
							{selectedPost.views}
						</Alert>
					)}

					<PostFormFields formData={editModal.formData} onChange={editModal.updateFormData} />
				</div>
			</Modal>
		</>
	);
};

export default PostManagement;
