import { render, screen } from '@testing-library/react';
import App from './App';

test('renders works react text', () => {
  render(<App />);
  const el = screen.getByText(/works/i);
  expect(el).toBeInTheDocument();
});
