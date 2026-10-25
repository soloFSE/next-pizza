import { Ingredient } from '@/src/generated/prisma/client';
import { axiosInstance } from './instance';
import { ApiRoutes } from './constants';

export const getAll = async (): Promise<Ingredient[]> => {
	const response = await axiosInstance.get<{ ingredients: Ingredient[] }>(
		ApiRoutes.GET_INGREDIENTS,
	);
	return response.data.ingredients;
};