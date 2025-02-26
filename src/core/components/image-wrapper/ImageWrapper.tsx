import { useState } from 'react';
import * as Styled from './ImageWrapper.styles';

import type { ImageWrapperProps } from './ImageWrapper.types';

const ImageWrapper: React.FC<ImageWrapperProps> = (props) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Styled.ImageWrapper>
      {isLoading && <Styled.Skeleton data-testid="image-wrapper-skeleton" />}
      <Styled.Image
        {...props}
        $isLoading={isLoading}
        onLoad={() => setIsLoading(false)}
        data-testid="image-wrapper-img"
      />
    </Styled.ImageWrapper>
  );
};

export default ImageWrapper;
