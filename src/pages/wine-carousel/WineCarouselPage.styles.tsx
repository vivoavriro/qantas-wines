import { palette } from '@core/theme/colors';
import { pxToRem } from '@core/theme/mixins';
import typographyMixins from '@core/theme/typography';
import styled from 'styled-components';

export const WineCarouselPageWrapper = styled.div`
  width: 100%;
`;

export const WineCarouselPageHeader = styled.h1`
  ${typographyMixins.heading_500}
  text-align: center;
  padding: ${pxToRem(24)} 0;
`;

export const WineCarouselPageCarouselWrapper = styled.div`
  border-top: 1px solid ${palette.gray.medium};
  padding: ${pxToRem(24)};
  margin: auto;
`;

export const WineCarouselPageLoading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
