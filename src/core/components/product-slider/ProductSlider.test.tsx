import { render, screen, fireEvent, act } from '@testing-library/react';
import ProductSlider from './ProductSlider';

const mockScrollTo = vi.fn();

describe('ProductSlider', () => {
  const items = [
    <div key="1">Item 1</div>,
    <div key="2">Item 2</div>,
    <div key="3">Item 3</div>,
    <div key="4">Item 4</div>,
    <div key="5">Item 5</div>,
  ];

  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('renders without crashing', () => {
    render(<ProductSlider items={items} />);
    expect(screen.getByTestId('product-slider')).toBeInTheDocument();
  });

  it('renders the correct number of tiles', () => {
    render(<ProductSlider items={items} />);
    const tiles = screen.getAllByTestId('product-slider-tile-wrapper');
    expect(tiles.length).toBe(items.length);
  });

  it('renders navigation arrows when hasNavigationArrow is true', () => {
    render(
      <ProductSlider
        items={items}
        hasNavigationArrow={true}
      />
    );
    expect(screen.getByTestId('product-slider-controls')).toBeInTheDocument();
  });

  it('does not render navigation arrows when hasNavigationArrow is false', () => {
    render(
      <ProductSlider
        items={items}
        hasNavigationArrow={false}
      />
    );
    expect(
      screen.queryByTestId('product-slider-controls')
    ).not.toBeInTheDocument();
  });

  it('renders pagination dots when hasPaginationDot is true', () => {
    render(
      <ProductSlider
        items={items}
        hasPaginationDot={true}
      />
    );
    expect(screen.getByTestId('product-slider-pagination')).toBeInTheDocument();
  });

  it('does not render pagination dots when hasPaginationDot is false', () => {
    render(
      <ProductSlider
        items={items}
        hasPaginationDot={false}
      />
    );
    expect(
      screen.queryByTestId('product-slider-pagination')
    ).not.toBeInTheDocument();
  });

  it('should cleanup event listeners on unmount', () => {
    const { unmount } = render(<ProductSlider items={items} />);
    const removeEventListenerSpy = vi.spyOn(window, 'removeEventListener');
    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      'resize',
      expect.any(Function)
    );
  });

  it('should call scrollTo when next button is Clicked', async () => {
    Object.defineProperties(HTMLElement.prototype, {
      scrollWidth: { value: 1800 },
      offsetWidth: { value: 1000 },
      scrollLeft: { value: 300 },
      scrollTo: { value: mockScrollTo },
    });
    render(<ProductSlider items={items} />);
    const button = screen.getAllByRole('button')[1];
    const productSlider = screen.getByTestId('product-slider');

    act(async () => {
      await fireEvent.click(button);
    });
    expect(productSlider.scrollTo).toHaveBeenCalled();
  });
});
