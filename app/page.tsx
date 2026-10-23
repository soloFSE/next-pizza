import { Container, Filters, SortPopup, Title, TopBar } from "@/components/shared";
import { Categories } from "@/components/shared/categories";

export default function Home() {
  return (
		<>
			<Container className='mt-10'>
				<Title text='Все пиццы' size='lg' className='font-extrabold' />
			</Container>

			<TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-15">

          <div className="w-62.5">
            <Filters />
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-16">Пиццы</div>
          </div>

        </div>
      </Container>
		</>
	);
}