import React from 'react';
import { render, screen } from '@testing-library/react';
import Counter from './Counter';

describe('Counter', () => {
  test('renders with default count', () => {
    render(<Counter />);
    expect(screen.getByText('0')).toBeInTheDocument();
    expect(screen.getByText('Total Visits')).toBeInTheDocument();
  });

  test('has stat-tile class', () => {
    const { container } = render(<Counter />);
    const tile = container.querySelector('.stat-tile');
    expect(tile).toBeInTheDocument();
  });

  test('displays value with correct class', () => {
    const { container } = render(<Counter />);
    const value = container.querySelector('.stat-tile-value');
    expect(value).toBeInTheDocument();
    expect(value).toHaveTextContent('0');
  });

  test('displays label with correct class', () => {
    const { container } = render(<Counter />);
    const label = container.querySelector('.stat-tile-label');
    expect(label).toBeInTheDocument();
    expect(label).toHaveTextContent('Total Visits');
  });
});
