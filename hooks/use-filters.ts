import React, { useCallback } from 'react';
import { useSet } from 'react-use';

import { useSearchParams } from 'next/navigation';

interface PriceProps {
	min?: number;
	max?: number;
}

interface QueryFilters extends PriceProps {
	sizes: string;
	types: string;
	ingredients: string;
}

export interface Filters {
    sizes: Set<string>;
    types: Set<string>;
    prices: PriceProps;
    selectedIngredients: Set<string>;
}

export interface ReturnProps extends Filters {
	setSizes: (value: string) => void;
	setPrices: (name: keyof PriceProps, value: number) => void;
	setPizzaTypes: (value: string) => void;
	setSelectedIngredients: (value: string) => void;
}

export const useFilters = (): ReturnProps => {
	const searchParams = useSearchParams() as unknown as Map<
		keyof QueryFilters,
		string
	>;

	const [selectedIngredients, { toggle: toggleIngredients }] = useSet(
		new Set<string>(searchParams.get('ingredients')?.split(',')),
	);

	const [sizes, { toggle: toggleSizes }] = useSet(
		new Set<string>(
			searchParams.has('sizes') ? searchParams.get('sizes')?.split(',') : [],
		),
	);

	const [types, { toggle: togglePizzaTypes }] = useSet(
		new Set<string>(
			searchParams.has('types') ? searchParams.get('types')?.split(',') : [],
		),
	);

	const [prices, setPrices] = React.useState<PriceProps>({
		min: Number(searchParams.get('min')) || undefined,
		max: Number(searchParams.get('max')) || undefined,
	});

	const changePrice = React.useCallback((name: keyof PriceProps, value: number) => {
		setPrices(prev => ({
			...prev,
			[name]: value,
		}));
	}, []);

	return React.useMemo(() => ({
        sizes,
        types,
        prices,
        selectedIngredients,
        setPrices: changePrice,
        setPizzaTypes: togglePizzaTypes,
        setSizes: toggleSizes,
        setSelectedIngredients: toggleIngredients,
	}), [
        sizes,
        types,
        prices,
        selectedIngredients,
        changePrice,
        togglePizzaTypes,
        toggleSizes,
        toggleIngredients,
    ]);
};
