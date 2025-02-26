import { palette } from '@core/theme/colors';
import { pxToRem } from '@core/theme/mixins';
import typographyMixins from '@core/theme/typography';
import styled from 'styled-components';

const getBackgroundColor = (variant: string) => {
  switch (variant) {
    case 'primary':
      return palette.red;
    case 'secondary':
      return palette.gray.medium;
    default:
      return 'black';
  }
};

const getPadding = (size: string) => {
  switch (size) {
    case 'small':
      return `${pxToRem(8)} ${pxToRem(12)}`;
    case 'medium':
      return `${pxToRem(12)} ${pxToRem(16)}`;
    case 'large':
      return `${pxToRem(16)} ${pxToRem(24)}`;
    default:
      return `${pxToRem(12)} ${pxToRem(16)}`;
  }
};

export const ButtonWrapper = styled.button<{
  $variant: string;
  $size: string;
}>`
  ${typographyMixins.body_300_bold}
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  border-radius: ${pxToRem(8)};
  background-color: ${({ $variant }) => getBackgroundColor($variant)};
  padding: ${({ $size }) => getPadding($size)};
  color: white;

  &:hover {
    opacity: 0.8;
  }
`;
