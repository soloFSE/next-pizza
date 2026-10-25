import React from 'react';
import { Checkbox } from '../ui';

export interface FilterCheckboxProps {
	value: string;
	text: string;
	endAdornment?: React.ReactNode;
	onCheckedChange?: (checked: boolean) => void;
	checked?: boolean;
	name?: string
}

export const FilterCheckbox: React.FC<FilterCheckboxProps> = ({ value, text, name, endAdornment, onCheckedChange, checked }) => {
	return (
		<div className='flex items-center space-x-2'>
			<Checkbox
				id={`checkbox-${String(name)}-${String(value)}`}
				value={value}
				className='rounded-lg w-6 h-6'
				checked={checked}
				onCheckedChange={onCheckedChange}
			/>
			<label
				htmlFor={`checkbox-${String(name)}-${String(value)}`}
				className='leading-none cursor-pointer flex-1'
			>
				{text}
			</label>
			{endAdornment}
		</div>
	);
};