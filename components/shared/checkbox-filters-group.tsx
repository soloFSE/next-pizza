'use client'

import React from 'react';
import { FilterCheckbox, FilterCheckboxProps } from './filter-checkbox';
import { Input, Skeleton } from '../ui';

type Item = FilterCheckboxProps

interface Props {
	title: string;
	items: Item[];
	defaultItems?: Item[];
	limit?: number;
	loading?: boolean;
	searchInputPlaceholder?: string;
	onClickCheckbox?: (id: string) => void;
	selectedIds?: Set<string>;
	defaultValues?: string[];
	className?: string;
	name: string
}

export const CheckboxFiltersGroup: React.FC<Props> = (
    {
        title,
        items,
        defaultItems,
        limit = 5,
        searchInputPlaceholder = 'Поиск...',
        className,
        onClickCheckbox,
        defaultValues,
		selectedIds,
		loading,
		name
    }
) => {
    const [showAll, setShowAll] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState('');

    const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    }

	if (loading) {
		return (
			<div className={className}>
				<p className='font-bold mb-3'>{title}</p>
				<div className='flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar'>
					{Array.from({ length: limit }).map((_, index) => (
						<Skeleton className='h-7 mb-px rounded-lg' key={index} />
					))}
					<Skeleton className='h-7 w-30 mb-px rounded-lg' />
				</div>
			</div>
		)
	}
    
    const list = showAll
			? items.filter(item =>
					item.text.toLowerCase().includes(searchValue.toLocaleLowerCase()),
				)
			: (defaultItems || items).slice(0, limit);

	return (
		<div className={className}>
			<p className='font-bold mb-3'>{title}</p>

			{showAll && (
				<div className='mb-5'>
					<Input
						onChange={onChangeSearch}
						placeholder={searchInputPlaceholder}
						className='bg-gray-50 border-none'
					/>
				</div>
			)}

			<div className='flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar'>
				{list.map((item, index) => (
					<FilterCheckbox
						value={item.value}
						key={index}
						text={item.text}
						name={name}
						endAdornment={item.endAdornment}
						checked={selectedIds?.has(item.value)}
						onCheckedChange={() => onClickCheckbox?.(item.value)}
					/>
				))}
			</div>

			{items.length > limit && (
				<div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
					<button
						onClick={() => setShowAll(!showAll)}
						className='cursor-pointer text-primary mt-3'
					>
						{showAll ? 'Скрыть' : '+ Показать все'}
					</button>
				</div>
			)}
		</div>
	);
};