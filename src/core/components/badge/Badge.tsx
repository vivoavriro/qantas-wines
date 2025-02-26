import { BadgeProps } from './Badge.types';

import * as Styled from './Badge.styles';

// this component can be modified to accept different variant of badge
const Badge: React.FC<BadgeProps> = ({ title }) => {
  return <Styled.BadgeWrapper>{title}</Styled.BadgeWrapper>;
};

export default Badge;
