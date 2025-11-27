import { useState } from 'react';
import Button from '../components/ui/button';
import UserManagement from '../components/UserManagement';
import PostManagement from '../components/PostManagement';
import type { EntityType } from '@/types';
import '../styles/components.css';

const ManagementPage = () => {
	const [entityType, setEntityType] = useState<EntityType>('post');

	return (
		<div className="min-h-screen bg-gray-100">
			<div className="max-w-[1200px] mx-auto p-5">
				<div className="mb-5">
					<h1 className="text-2xl font-bold mb-1 text-gray-800">관리 시스템</h1>
					<p className="text-sm text-gray-600">사용자와 게시글을 관리하세요</p>
				</div>

				<div className="bg-white border border-gray-300 p-2.5">
					<div className="mb-4 border-b border-gray-400 pb-1 flex gap-1">
						<Button
							onClick={() => setEntityType('post')}
							variant={entityType === 'post' ? 'primary' : 'secondary'}
							size="sm"
						>
							게시글
						</Button>
						<Button
							onClick={() => setEntityType('user')}
							variant={entityType === 'user' ? 'primary' : 'secondary'}
							size="sm"
						>
							사용자
						</Button>
					</div>

					{entityType === 'user' ? <UserManagement /> : <PostManagement />}
				</div>
			</div>
		</div>
	);
};

export default ManagementPage;
