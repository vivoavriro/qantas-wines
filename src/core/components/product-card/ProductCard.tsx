import { Badge } from '../badge';
import { ProductCardProps } from './ProductCard.types';

import * as Styled from './ProductCard.style';
import { getCurrencySymbol } from '@utils/currencySymbol';
import { Button } from '../button';

import TrolleySvg from '@core/assets/icons/shopping_trolley.svg';
import { ImageWrapper } from '../image-wrapper';

const ProductCard: React.FC<ProductCardProps> = ({
  tag,
  name,
  description,
  image,
  imageSrc,
  wasPrice,
  currentPrice,
  onAddClick,
}) => {
  const subPrice = wasPrice?.cashPrice?.amount
    ? getCurrencySymbol(wasPrice?.cashPrice.currencyCode) +
      wasPrice?.cashPrice?.amount.toFixed(2)
    : '';
  const mainPrice = currentPrice?.cashPrice?.amount
    ? getCurrencySymbol(currentPrice?.cashPrice.currencyCode) +
      currentPrice?.cashPrice?.amount.toFixed(2)
    : '';

  const subPoint = wasPrice?.pointsPrice?.amount
    ? wasPrice?.pointsPrice?.amount
    : '';
  const mainPoint = currentPrice?.pointsPrice?.amount
    ? currentPrice?.pointsPrice?.amount
    : '';
  return (
    <Styled.ProductCardWrapper>
      {tag && <Badge title={tag} />}
      <Styled.ProductCardInfoWrapper>
        <Styled.ProductCardName>{name}</Styled.ProductCardName>
        <Styled.ProductCardDescription>
          {description}
        </Styled.ProductCardDescription>
      </Styled.ProductCardInfoWrapper>
      <Styled.ProductCardImageWrapper>
        <ImageWrapper
          src={image || imageSrc}
          alt={name}
          data-testId="product-card-image"
        />
      </Styled.ProductCardImageWrapper>
      <Styled.ProductCardPriceWrapper>
        <Styled.ProductCardSubPrice $hasDiscount={Boolean(wasPrice)}>
          {subPrice}
        </Styled.ProductCardSubPrice>
        <Styled.ProductCardMainPrice $hasDiscount={Boolean(wasPrice)}>
          {mainPrice}
        </Styled.ProductCardMainPrice>
      </Styled.ProductCardPriceWrapper>
      <Styled.ProductCardFooter>
        <Styled.ProductCardPointsWrapper>
          <Styled.ProductCardMainPoints $hasDiscount={Boolean(wasPrice)}>
            <span>Or</span> {mainPoint} PTS
          </Styled.ProductCardMainPoints>
          <Styled.ProductCardSubPoints $hasDiscount={Boolean(wasPrice)}>
            {subPoint} PTS
          </Styled.ProductCardSubPoints>
        </Styled.ProductCardPointsWrapper>
        <Button
          size="large"
          variant="primary"
          onClick={onAddClick}
        >
          Add <Styled.ProductCardButtonImg src={TrolleySvg} />
        </Button>
      </Styled.ProductCardFooter>
    </Styled.ProductCardWrapper>
  );
};

export default ProductCard;
