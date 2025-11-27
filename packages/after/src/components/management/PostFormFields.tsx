// import { FormInput } from '@/components/molecules';
import { FormTextarea } from '@/components/FormTextarea';
import { Input } from '@/components/ui/input';
import { FormSelect, type Option } from '@/components/ui/native-select';
import type { Post, PostFormData } from '@/types';

interface PostFormFieldsProps {
	formData: Partial<PostFormData>;
	onChange: (data: Partial<PostFormData>) => void;
}

const CATEGORY_OPTIONS: Option[] = [
	{ value: 'development', label: 'Development' },
	{ value: 'design', label: 'Design' },
	{ value: 'accessibility', label: 'Accessibility' },
];

export const PostFormFields = ({ formData, onChange }: PostFormFieldsProps) => {
	return (
		<div className="space-y-4">
			<Input
				name="title"
				value={formData.title || ''}
				onChange={(value) => onChange({ ...formData, title: value })}
				label="제목"
				placeholder="게시글 제목을 입력하세요"
				required
				width="full"
			/>
			<div className="grid grid-cols-2 gap-4">
				<Input
					name="author"
					value={formData.author || ''}
					onChange={(value) => onChange({ ...formData, author: value })}
					label="작성자"
					placeholder="작성자명"
					required
					width="full"
				/>
				<FormSelect
					name="category"
					value={formData.category || ''}
					onChange={(value) => onChange({ ...formData, category: value as Post['category'] })}
					options={CATEGORY_OPTIONS}
					label="카테고리"
					placeholder="카테고리 선택"
					size="md"
				/>
			</div>
			<FormTextarea
				name="content"
				value={formData.content || ''}
				onChange={(value: string) => onChange({ ...formData, content: value })}
				label="내용"
				placeholder="게시글 내용을 입력하세요"
				rows={6}
			/>
		</div>
	);
};
