import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Click on the Vite and React/i);
  expect(linkElement).toBeInTheDocument();
});
