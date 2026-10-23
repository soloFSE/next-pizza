'use client'

import React from 'react';
import { useIntersection } from 'react-use'

import { Title, ProductCard } from './index';
import { useCategoryStore } from '@/store/category';

interface Props {
	title: string;
	items: any[];
	categoryId: number;
	className?: string;
	listClassName?: string;
}

export const ProductGroupList: React.FC<Props> = ({
	title,
	items,
	categoryId,
	className,
	listClassName,
}) => {
	const setActiveCategoryId = useCategoryStore((state) => state.setActiveId)
	const intersectionRef = React.useRef<HTMLDivElement>(null);
	const intersection = useIntersection(intersectionRef as React.RefObject<HTMLDivElement>, {
		threshold: 0.4,
	});

	React.useEffect(() => {
		if (intersection?.isIntersecting) {
			setActiveCategoryId(categoryId);
		}
	}, [categoryId, intersection, title, setActiveCategoryId]);

	return (
		<div id={title} className={className} ref={intersectionRef}>
			<Title text={title} size='lg' className='font-extrabold mb-5' />
			<div className='grid grid-cols-3 gap-12.5'>
				{items.map((product) => (
					<ProductCard
                        id={product.id}
						key={product.id}
						name={product.name}
						imageUrl={product.imageUrl}
						price={product.items[0].price}
					/>
				))}
			</div>
		</div>
	);
};