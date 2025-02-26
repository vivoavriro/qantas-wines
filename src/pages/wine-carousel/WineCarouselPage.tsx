import { ProductCard } from '@core/components/product-card';

import { useFetchWineListQuery } from '@services/index';

function WineCarouselPage() {
  const { data } = useFetchWineListQuery();
  return (
    <div className="App">
      {data && <ProductCard {...data.search.products[0]} />}
    </div>
  );
}

export default WineCarouselPage;
