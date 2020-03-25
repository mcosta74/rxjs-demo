import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders ActivityChecker', () => {
  const { getByTestId } = render(<App />);
  const checkerElement = getByTestId('activity-checker');
  expect(checkerElement).toBeTruthy();
});
