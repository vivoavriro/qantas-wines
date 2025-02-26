import { render, screen, fireEvent } from '@testing-library/react';
import ProductCard from './ProductCard';
import { palette } from '@core/theme/colors';

describe('ProductCard Component', () => {
  const defaultProps = {
    tag: 'New',
    name: 'Test Wine',
    description: 'A fine bottle of red wine.',
    image: 'test-image.jpg',
    imageSrc: 'fallback-image.jpg',
    wasPrice: {
      cashPrice: { currencyCode: 'USD', amount: 19.99 },
      pointsPrice: { amount: 1500 },
    },
    currentPrice: {
      cashPrice: { currencyCode: 'USD', amount: 14.99 },
      pointsPrice: { amount: 1000 },
    },
  };

  it('should renders the product name, description, and image', () => {
    render(<ProductCard {...defaultProps} />);

    expect(screen.getByText('Test Wine')).toBeInTheDocument();
    expect(screen.getByText('A fine bottle of red wine.')).toBeInTheDocument();
    expect(screen.getByTestId('product-card-image')).toBeInTheDocument();
    expect(screen.getByTestId('product-card-image')).toHaveAttribute(
      'src',
      'test-image.jpg'
    );
  });

  it('should renders the badge when a tag is provided', () => {
    render(<ProductCard {...defaultProps} />);

    expect(screen.getByText('New')).toBeInTheDocument();
  });

  it('should renders correct prices when there is a discount', () => {
    render(<ProductCard {...defaultProps} />);

    expect(screen.getByText('$19.99')).toHaveStyle(
      'text-decoration: line-through'
    );
    expect(screen.getByText('$14.99')).toHaveStyle(`color: ${palette.red}`);
  });

  it('should renders correct points when there is a discount', () => {
    render(<ProductCard {...defaultProps} />);

    expect(screen.getByText('1500 PTS')).toHaveStyle(
      'text-decoration: line-through'
    );
    expect(screen.getByText('1000 PTS')).toHaveStyle(`color: ${palette.red}`);
  });

  it('should renders correct prices when there is no discount', () => {
    render(
      <ProductCard
        {...defaultProps}
        wasPrice={undefined}
      />
    );

    expect(screen.getByText('$14.99')).toHaveStyle(`color: ${palette.black}`);
    expect(screen.queryByText('$19.99')).not.toBeInTheDocument();
  });

  it('should renders correct points when there is no discount', () => {
    render(
      <ProductCard
        {...defaultProps}
        wasPrice={undefined}
      />
    );

    expect(screen.getByText('1000 PTS')).toHaveStyle(`color: ${palette.black}`);
    expect(screen.queryByText('1500 PTS')).not.toBeInTheDocument();
  });

  it('should triggers the add button click event', () => {
    const handleClick = vi.fn();
    render(
      <ProductCard
        {...defaultProps}
        onAddClick={handleClick}
      />
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalled();
  });

  it('should renders correctly when there is no tag', () => {
    render(
      <ProductCard
        {...defaultProps}
        tag={undefined}
      />
    );

    expect(screen.queryByTestId('badge')).not.toBeInTheDocument();
  });
});
