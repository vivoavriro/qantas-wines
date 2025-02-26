import styled from 'styled-components';
import { palette } from '@core/theme/colors';
import typographyMixins from '@core/theme/typography';
import { pxToRem } from '@core/theme/mixins';

export const ProductCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  position: relative;
  background-color: ${palette.gray.light};
  padding: ${pxToRem(48)} ${pxToRem(24)} ${pxToRem(24)};
  gap: 1.5rem;
  border-radius: ${pxToRem(8)};
`;

export const ProductCardInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.25rem;
`;

export const ProductCardName = styled.h3`
  ${typographyMixins.heading_300}
`;

export const ProductCardDescription = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  color: ${palette.gray.dark};
  ${typographyMixins.body_200}
`;

export const ProductCardImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: ${pxToRem(218)};
  width: 100%;
  align-self: center;
`;

export const ProductCardPriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const ProductCardSubPrice = styled.p<{ $hasDiscount: boolean }>`
  ${({ $hasDiscount }) =>
    $hasDiscount ? typographyMixins.body_200 : typographyMixins.body_400};
  text-decoration: ${(props) => (props.$hasDiscount ? 'line-through' : 'none')};
  display: block;
  min-height: ${pxToRem(21)};
`;

export const ProductCardMainPrice = styled.p<{ $hasDiscount: boolean }>`
  ${typographyMixins.heading_400}
  color: ${(props) => (props.$hasDiscount ? palette.red : palette.black)};
`;

export const ProductCardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const ProductCardPointsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const ProductCardSubPoints = styled.p<{ $hasDiscount: boolean }>`
  ${({ $hasDiscount }) =>
    $hasDiscount ? typographyMixins.body_200 : typographyMixins.body_400};
  text-decoration: ${(props) => (props.$hasDiscount ? 'line-through' : 'none')};
  display: block;
  min-height: ${pxToRem(21)};
`;

export const ProductCardMainPoints = styled.p<{ $hasDiscount: boolean }>`
  ${typographyMixins.body_300_bold}
  color: ${(props) => (props.$hasDiscount ? palette.red : palette.black)};
  & > span {
    ${typographyMixins.body_300}
    color: ${palette.black};
    padding-right: ${pxToRem(4)};
  }
`;

export const ProductCardButtonImg = styled.img`
  margin-left: ${pxToRem(8)};
`;
