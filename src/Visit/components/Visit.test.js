import React from 'react';
import { render, screen } from '@testing-library/react';
import Visit from './Visit';

describe('Visit', () => {
  test('renders with default device', () => {
    render(<Visit />);
    expect(screen.getByText('Your browser')).toBeInTheDocument();
    expect(screen.getByText('Your Device')).toBeInTheDocument();
  });

  test('has stat-tile class', () => {
    const { container } = render(<Visit />);
    const tile = container.querySelector('.stat-tile');
    expect(tile).toBeInTheDocument();
  });
});
