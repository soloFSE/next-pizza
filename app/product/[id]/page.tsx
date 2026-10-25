// app/product/[id]/page.tsx
import { Suspense } from 'react';

// 1. Выносим логику с `await params` в отдельный компонент
async function ProductContent({ params }: { params: Promise<{ id: string }> }) {
	const { id } = await params;
	return <h1>Product {id}</h1>;
}

// 2. Главная страница просто отдает статическую оболочку и Suspense-границу
export default function ProductPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	return (
		<Suspense fallback={<div>Загрузка информации о товаре...</div>}>
			<ProductContent params={params} />
		</Suspense>
	);
}
