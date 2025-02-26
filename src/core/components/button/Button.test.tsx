import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';
import { palette } from '@core/theme/colors';
import { pxToRem } from '@core/theme/mixins';

describe('Button Component', () => {
  it('should renders button with default props', () => {
    render(<Button>Click Me</Button>);

    const button = screen.getByRole('button', { name: /click me/i });

    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle(`background-color: ${palette.red}`);
    expect(button).toHaveStyle(`padding: ${pxToRem(12)} ${pxToRem(16)}`);
  });

  it('should applies the correct variant styles', () => {
    render(<Button variant="secondary">Secondary Button</Button>);

    const button = screen.getByRole('button', { name: /secondary button/i });

    expect(button).toHaveStyle(`background-color: ${palette.gray.medium}`);
  });

  it('should applies the correct size styles', () => {
    render(<Button size="large">Large Button</Button>);

    const button = screen.getByRole('button', { name: /large button/i });

    expect(button).toHaveStyle(`padding: ${pxToRem(16)} ${pxToRem(24)}`);
  });

  it('should calls onClick handler when clicked', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);

    const button = screen.getByRole('button', { name: /click me/i });

    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
