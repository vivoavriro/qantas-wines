import { render, screen, waitFor } from '@testing-library/react';
import ImageWrapper from './ImageWrapper';

describe('ImageWrapper', () => {
  it('should show the skeleton while the image is loading', () => {
    render(
      <ImageWrapper
        src="image.jpg"
        alt="Test Image"
      />
    );

    expect(screen.getByTestId('image-wrapper-skeleton')).toBeInTheDocument();
  });

  it('should show the image after it has loaded', async () => {
    render(
      <ImageWrapper
        src="image.jpg"
        alt="Test Image"
      />
    );

    await waitFor(() => {
      expect(screen.getByTestId('image-wrapper-img')).toBeInTheDocument();
    });
  });
});
