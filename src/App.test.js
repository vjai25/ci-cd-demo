import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn new react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn new react/i);
  expect(linkElement).toBeInTheDocument();
});
