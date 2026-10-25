'use client';

import React from 'react';

import { Title } from './title';
import { Input, RangeSlider } from '../ui';
import { CheckboxFiltersGroup } from './checkbox-filters-group';

import { useQueryFilters, useFilters, useIngredients } from '@/hooks';

export interface Props {
	className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
	const filters = useFilters();
	const { ingredients, loading } = useIngredients();

	useQueryFilters(filters);

	const items = Array.isArray(ingredients)
		? ingredients.map(ingredient => ({
				value: String(ingredient.id),
				text: ingredient.name,
			}))
		: [];

	const updatePrices = (prices: [number, number]) => {
		filters.setPrices('min', prices[0]);
		filters.setPrices('max', prices[1]);
	}

	return (
		<div className={className}>
			<Title text='Фильтрация' size='sm' className='mb-5 font-bold' />

			<CheckboxFiltersGroup
				title='Тип теста'
				name='pizzasType'
				className='mb-5'
				items={[
					{ text: 'Тонкое', value: '1' },
					{ text: 'Традиционное', value: '2' },
				]}
				selectedIds={filters.types}
				onClickCheckbox={filters.setPizzaTypes}
			/>

			<CheckboxFiltersGroup
				title='Размеры'
				name='sizes'
				className='mb-5'
				items={[
					{ text: '20 см', value: '20' },
					{ text: '30 см', value: '30' },
					{ text: '40 см', value: '40' },
				]}
				selectedIds={filters.sizes}
				onClickCheckbox={filters.setSizes}
			/>

			<div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
				<p className='font-bold mb-3'>Цена от и до:</p>
				<div className='flex gap-3 mb-5'>
					<Input
						type='number'
						placeholder='0'
						min={0}
						max={1000}
						value={String(filters.prices.min)}
						onChange={e => filters.setPrices('min', Number(e.target.value))}
					/>
					<Input
						type='number'
						min={0}
						max={1000}
						placeholder='1000'
						value={String(filters.prices.max)}
						onChange={e => filters.setPrices('max', Number(e.target.value))}
					/>
				</div>
				<RangeSlider
					min={0}
					max={1000}
					step={10}
					value={[filters.prices.min || 0, filters.prices.max || 1000]}
					onValueChange={([from, to]) => updatePrices([from, to])}
				/>
			</div>

			<CheckboxFiltersGroup
				className='mt-5'
				title='Ингредиенты'
				name='ingredients'
				limit={6}
				defaultItems={items.slice(0, 6)}
				items={items}
				loading={loading}
				onClickCheckbox={filters.setSelectedIngredients}
				selectedIds={filters.selectedIngredients}
			/>
		</div>
	);
};
