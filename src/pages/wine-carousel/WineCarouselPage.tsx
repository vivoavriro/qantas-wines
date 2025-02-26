import { ProductCard } from '@core/components/product-card';
import { ProductSlider } from '@core/components/product-slider';

import { useFetchWineListQuery } from '@services/index';

function WineCarouselPage() {
  const { data } = useFetchWineListQuery();
  return (
    <div className="App">
      {data && (
        <ProductSlider
          items={[
            ...data.search.products,
            ...data.search.products,
            ...data.search.products,
            ...data.search.products,
          ].map((product) => (
            <ProductCard
              key={product.name}
              {...product}
            />
          ))}
        />
      )}
    </div>
  );
}

export default WineCarouselPage;
