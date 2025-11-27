import type { Meta, StoryObj } from '@storybook/react';
import { NativeSelect, NativeSelectOption, NativeSelectOptGroup } from './native-select';

const meta = {
	title: 'UI/NativeSelect',
	component: FormSelect,
	parameters: {
		layout: 'padded',
	},
	tags: ['autodocs'],
	argTypes: {
		size: {
			control: 'select',
			options: ['sm', 'md', 'lg'],
			description: 'Select size',
		},
		disabled: {
			control: 'boolean',
			description: 'Disabled state',
		},
		required: {
			control: 'boolean',
			description: 'Required field',
		},
	},
} satisfies Meta<typeof FormSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleOptions = [
	{ value: 'option1', label: 'Option 1' },
	{ value: 'option2', label: 'Option 2' },
	{ value: 'option3', label: 'Option 3' },
];

export const Default: Story = {
	args: {
		name: 'default-select',
		options: sampleOptions,
		placeholder: 'Select an option...',
	},
};

export const WithLabel: Story = {
	args: {
		name: 'labeled-select',
		label: 'Choose Option',
		options: sampleOptions,
		placeholder: 'Select an option...',
	},
};

export const Required: Story = {
	args: {
		name: 'required-select',
		label: 'Required Select',
		options: sampleOptions,
		placeholder: 'Please select...',
		required: true,
	},
};

export const WithError: Story = {
	args: {
		name: 'error-select',
		label: 'Select with Error',
		options: sampleOptions,
		placeholder: 'Select an option...',
		error: 'This field is required',
	},
};

export const WithHelpText: Story = {
	args: {
		name: 'help-select',
		label: 'Select with Help',
		options: sampleOptions,
		placeholder: 'Select an option...',
		helpText: 'Choose the option that best fits your needs',
	},
};

export const Disabled: Story = {
	args: {
		name: 'disabled-select',
		label: 'Disabled Select',
		options: sampleOptions,
		placeholder: 'Cannot select',
		disabled: true,
	},
};

export const SmallSize: Story = {
	args: {
		name: 'small-select',
		label: 'Small Select',
		options: sampleOptions,
		size: 'sm',
	},
};

export const MediumSize: Story = {
	args: {
		name: 'medium-select',
		label: 'Medium Select',
		options: sampleOptions,
		size: 'md',
	},
};

export const LargeSize: Story = {
	args: {
		name: 'large-select',
		label: 'Large Select',
		options: sampleOptions,
		size: 'lg',
	},
};

export const CustomNativeSelect: Story = {
	render: () => (
		<div className="w-[300px]">
			<label htmlFor="custom-select" className="block mb-2 text-sm font-medium">
				Custom Native Select
			</label>
			<NativeSelect id="custom-select" defaultValue="">
				<NativeSelectOption value="" disabled>
					Select a country
				</NativeSelectOption>
				<NativeSelectOptGroup label="North America">
					<NativeSelectOption value="us">United States</NativeSelectOption>
					<NativeSelectOption value="ca">Canada</NativeSelectOption>
					<NativeSelectOption value="mx">Mexico</NativeSelectOption>
				</NativeSelectOptGroup>
				<NativeSelectOptGroup label="Europe">
					<NativeSelectOption value="uk">United Kingdom</NativeSelectOption>
					<NativeSelectOption value="fr">France</NativeSelectOption>
					<NativeSelectOption value="de">Germany</NativeSelectOption>
				</NativeSelectOptGroup>
				<NativeSelectOptGroup label="Asia">
					<NativeSelectOption value="jp">Japan</NativeSelectOption>
					<NativeSelectOption value="kr">South Korea</NativeSelectOption>
					<NativeSelectOption value="cn">China</NativeSelectOption>
				</NativeSelectOptGroup>
			</NativeSelect>
		</div>
	),
};
