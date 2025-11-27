import React, { useState } from 'react';
import Button from '../components/ui/button';
import UserManagement from '../components/UserManagement';
import PostManagement from '../components/PostManagement';
import type { EntityType } from '@/types';
import '../styles/components.css';

const ManagementPage: React.FC = () => {
	const [entityType, setEntityType] = useState<EntityType>('post');

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

					<div>{entityType === 'user' ? <UserManagement /> : <PostManagement />}</div>
				</div>
			</div>
		</div>
	);
};

export default ManagementPage;
