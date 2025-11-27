import { FormInput } from '@/components/molecules';
import { FormSelect, type Option } from '@/components/ui/native-select';
import type { User, UserFormData } from '@/types';

interface UserFormFieldsProps {
	formData: Partial<UserFormData>;
	onChange: (data: Partial<UserFormData>) => void;
}

const ROLE_OPTIONS: Option[] = [
	{ value: 'user', label: '사용자' },
	{ value: 'moderator', label: '운영자' },
	{ value: 'admin', label: '관리자' },
];

const STATUS_OPTIONS: Option[] = [
	{ value: 'active', label: '활성' },
	{ value: 'inactive', label: '비활성' },
	{ value: 'suspended', label: '정지' },
];

export const UserFormFields = ({ formData, onChange }: UserFormFieldsProps) => {
	return (
		<div className="space-y-4">
			<FormInput
				name="username"
				value={formData.username || ''}
				onChange={(value) => onChange({ ...formData, username: value })}
				label="사용자명"
				placeholder="사용자명을 입력하세요"
				required
				width="full"
			/>
			<FormInput
				name="email"
				value={formData.email || ''}
				onChange={(value) => onChange({ ...formData, email: value })}
				label="이메일"
				placeholder="이메일을 입력하세요"
				type="email"
				required
				width="full"
			/>
			<div className="grid grid-cols-2 gap-4">
				<FormSelect
					name="role"
					value={formData.role || 'user'}
					onChange={(value) => onChange({ ...formData, role: value as User['role'] })}
					options={ROLE_OPTIONS}
					label="역할"
					size="md"
				/>
				<FormSelect
					name="status"
					value={formData.status || 'active'}
					onChange={(value) => onChange({ ...formData, status: value as User['status'] })}
					options={STATUS_OPTIONS}
					label="상태"
					size="md"
				/>
			</div>
		</div>
	);
};
