import * as Styled from './Button.styles';

import { ButtonProps } from './Button.types';

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  ...props
}) => {
  return (
    <Styled.ButtonWrapper
      $size={size}
      $variant={variant}
      {...props}
    />
  );
};

export default Button;
