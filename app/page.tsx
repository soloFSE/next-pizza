import { Container, Filters, ProductCard, ProductGroupList, SortPopup, Title, TopBar } from "@/components/shared";
import { Suspense } from "react";

export default function Home() {
	return (
		<>
			<Container className='mt-10'>
				<Title text='Все пиццы' size='lg' className='font-extrabold' />
			</Container>

			<TopBar />

			<Container className='mt-10 pb-14'>
				<div className='flex gap-20'>
					<div className='w-62.5'>
						<Suspense fallback={<div>Загрузка фильтров...</div>}>
							<Filters />
						</Suspense>
					</div>

					<div className='flex-1'>
						<div className='flex flex-col gap-16'>
							<ProductGroupList
								categoryId={1}
								title='Пиццы'
								items={[
									{
										id: 1,
										name: 'Пепперони Фреш с перцем',
										imageUrl:
											'https://media.dodostatic.net/image/r:760x760/019f75145473715ab3ff8f9d256bc860.webp',
										price: 550,
										items: [{ price: 550 }],
									},
									{
										id: 2,
										name: 'Пепперони Фреш с перцем',
										imageUrl:
											'https://media.dodostatic.net/image/r:760x760/019f75145473715ab3ff8f9d256bc860.webp',
										price: 550,
										items: [{ price: 550 }],
									},
									{
										id: 3,
										name: 'Пепперони Фреш с перцем',
										imageUrl:
											'https://media.dodostatic.net/image/r:760x760/019f75145473715ab3ff8f9d256bc860.webp',
										price: 550,
										items: [{ price: 550 }],
									},
									{
										id: 4,
										name: 'Пепперони Фреш с перцем',
										imageUrl:
											'https://media.dodostatic.net/image/r:760x760/019f75145473715ab3ff8f9d256bc860.webp',
										price: 550,
										items: [{ price: 550 }],
									},
									{
										id: 5,
										name: 'Пепперони Фреш с перцем',
										imageUrl:
											'https://media.dodostatic.net/image/r:760x760/019f75145473715ab3ff8f9d256bc860.webp',
										price: 550,
										items: [{ price: 550 }],
									},
								]}
							/>
							<ProductGroupList
								categoryId={2}
								title='Комбо'
								items={[
									{
										id: 1,
										name: 'Пепперони Фреш с перцем',
										imageUrl:
											'https://media.dodostatic.net/image/r:760x760/019f75145473715ab3ff8f9d256bc860.webp',
										price: 550,
										items: [{ price: 550 }],
									},
									{
										id: 2,
										name: 'Пепперони Фреш с перцем',
										imageUrl:
											'https://media.dodostatic.net/image/r:760x760/019f75145473715ab3ff8f9d256bc860.webp',
										price: 550,
										items: [{ price: 550 }],
									},
									{
										id: 3,
										name: 'Пепперони Фреш с перцем',
										imageUrl:
											'https://media.dodostatic.net/image/r:760x760/019f75145473715ab3ff8f9d256bc860.webp',
										price: 550,
										items: [{ price: 550 }],
									},
									{
										id: 4,
										name: 'Пепперони Фреш с перцем',
										imageUrl:
											'https://media.dodostatic.net/image/r:760x760/019f75145473715ab3ff8f9d256bc860.webp',
										price: 550,
										items: [{ price: 550 }],
									},
									{
										id: 5,
										name: 'Пепперони Фреш с перцем',
										imageUrl:
											'https://media.dodostatic.net/image/r:760x760/019f75145473715ab3ff8f9d256bc860.webp',
										price: 550,
										items: [{ price: 550 }],
									},
								]}
							/>
							<ProductGroupList
								categoryId={3}
								title='Закуски'
								items={[
									{
										id: 1,
										name: 'Пепперони Фреш с перцем',
										imageUrl:
											'https://media.dodostatic.net/image/r:760x760/019f75145473715ab3ff8f9d256bc860.webp',
										price: 550,
										items: [{ price: 550 }],
									},
									{
										id: 2,
										name: 'Пепперони Фреш с перцем',
										imageUrl:
											'https://media.dodostatic.net/image/r:760x760/019f75145473715ab3ff8f9d256bc860.webp',
										price: 550,
										items: [{ price: 550 }],
									},
									{
										id: 3,
										name: 'Пепперони Фреш с перцем',
										imageUrl:
											'https://media.dodostatic.net/image/r:760x760/019f75145473715ab3ff8f9d256bc860.webp',
										price: 550,
										items: [{ price: 550 }],
									},
									{
										id: 4,
										name: 'Пепперони Фреш с перцем',
										imageUrl:
											'https://media.dodostatic.net/image/r:760x760/019f75145473715ab3ff8f9d256bc860.webp',
										price: 550,
										items: [{ price: 550 }],
									},
									{
										id: 5,
										name: 'Пепперони Фреш с перцем',
										imageUrl:
											'https://media.dodostatic.net/image/r:760x760/019f75145473715ab3ff8f9d256bc860.webp',
										price: 550,
										items: [{ price: 550 }],
									},
								]}
							/>
						</div>
					</div>
				</div>
			</Container>
		</>
	);
}