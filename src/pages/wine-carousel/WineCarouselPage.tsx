import { ProductCard } from '@core/components/product-card';
import { ProductSlider } from '@core/components/product-slider';
import * as Styled from './WineCarouselPage.styles';

import { useFetchWineListQuery } from '@services/index';

function WineCarouselPage() {
  const { data, isLoading } = useFetchWineListQuery();
  return (
    <Styled.WineCarouselPageWrapper>
      <Styled.WineCarouselPageHeader>
        Qantas Wine Carousel
      </Styled.WineCarouselPageHeader>
      <Styled.WineCarouselPageCarouselWrapper>
        {isLoading && (
          <Styled.WineCarouselPageLoading>
            {' '}
            Is Loading ...
          </Styled.WineCarouselPageLoading>
        )}
        {data && !isLoading && (
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
      </Styled.WineCarouselPageCarouselWrapper>
    </Styled.WineCarouselPageWrapper>
  );
}

export default WineCarouselPage;
