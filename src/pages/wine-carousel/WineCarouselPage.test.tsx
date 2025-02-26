import { render, screen, waitFor } from '@testing-library/react';
import WineCarouselPage from './WineCarouselPage';
import { useFetchWineListQuery } from '@services/index';
import { ProductSlider } from '@core/components/product-slider';
import { vi } from 'vitest';

vi.mock('@services/index', () => ({
  useFetchWineListQuery: vi.fn(),
}));

vi.mock('@core/components/product-card', () => ({
  ProductCard: vi.fn(() => <div>ProductCard </div>),
}));

vi.mock('@core/components/product-slider', () => ({
  ProductSlider: vi.fn(() => <div>ProductSlider </div>),
}));

describe('WineCarouselPage', () => {
  it('should show loading state when data is loading', () => {
    vi.mocked(useFetchWineListQuery).mockReturnValue({
      data: undefined,
      isLoading: true,
      Error: false,
    });

    render(<WineCarouselPage />);

    expect(screen.getByText('Is Loading ...')).toBeInTheDocument();
  });

  it('should render ProductSlider with data when data is available', async () => {
    vi.mocked(useFetchWineListQuery).mockReturnValue({
      data: {
        search: {
          products: [
            {
              name: 'Wine 1',
              description: '',
              currentPrice: {
                cashPrice: {
                  currencyCode: '',
                  amount: 0,
                },
                pointsPrice: {
                  amount: 0,
                },
              },
            },
            {
              name: 'Wine 2',
              description: '',
              currentPrice: {
                cashPrice: {
                  currencyCode: '',
                  amount: 0,
                },
                pointsPrice: {
                  amount: 0,
                },
              },
            },
          ],
          total: 0,
        },
      },
      isLoading: false,
      Error: false,
    });

    render(<WineCarouselPage />);

    await waitFor(() => {
      expect(screen.getByText('ProductSlider')).toBeInTheDocument();
    });

    expect(ProductSlider).toHaveBeenCalled();
  });
});
