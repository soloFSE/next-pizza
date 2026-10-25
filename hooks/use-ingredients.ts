import { Api } from '@/services/api-client';
import { Ingredient } from '@/src/generated/prisma/client';
import React from 'react';

export const useIngredients = () => {
	const [ingredients, setIngredients] = React.useState<Ingredient[]>([]);
	const [loading, setLoading] = React.useState(true);

	React.useEffect(() => {
		Api.ingredients
			.getAll()
			.then(res => {
				setIngredients(res);
				setLoading(false);
			})
			.catch(err => {
				console.log(err);
			});
	}, []);

	return { ingredients, loading};

};