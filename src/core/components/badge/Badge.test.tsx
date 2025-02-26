import { render, screen } from '@testing-library/react';
import Badge from './Badge';

describe('Badge Component', () => {
  test('should render Badge component', () => {
    render(<Badge title="Sale" />);
    expect(screen.getByText('Sale')).toBeInTheDocument();
  });
});
