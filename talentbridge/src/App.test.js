import { render, screen } from '@testing-library/react';
import App from './App';

test('renders TalentBridge landing page', () => {
  render(<App />);
  expect(screen.getByText(/TalentBridge/i)).toBeInTheDocument();
  expect(screen.getByText(/Build Your Dream/i)).toBeInTheDocument();
});
