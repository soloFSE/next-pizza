import React from "react";
import { Filters } from "./use-filters";
import QueryString from "qs";
import { useRouter } from "next/navigation";

export const useQueryFilters = (filters: Filters) => {
    const router = useRouter()

    React.useEffect(() => {
		const params = {
			...filters.prices,
			types: Array.from(filters.types),
			sizes: Array.from(filters.sizes),
			ingredients: Array.from(filters.selectedIngredients),
		};

		const query = QueryString.stringify(params, {
			arrayFormat: 'comma'
		})

		router.push(`/?${query}`)
	}, [filters.prices.min, filters.prices.max, filters, router]);
}