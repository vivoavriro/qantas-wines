import { palette } from '@core/theme/colors';
import { pxToRem } from '@core/theme/mixins';
import typographyMixins from '@core/theme/typography';
import styled from 'styled-components';

const BadgeWrapper = styled.h5`
  ${typographyMixins.body_200_bold};
  background-color: ${palette.blue_light};
  border-radius: 0 0 ${pxToRem(18)} 0;
  position: absolute;
  padding: ${pxToRem(8)} ${pxToRem(12)};
  left: 0;
  top: 0;
`;

export { BadgeWrapper };
