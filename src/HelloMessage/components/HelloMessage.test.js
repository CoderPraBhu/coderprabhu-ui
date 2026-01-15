import React from 'react';
import { render, screen } from '@testing-library/react';
import HelloMessage from './HelloMessage';

describe('HelloMessage', () => {
  test('renders with default message', () => {
    render(<HelloMessage />);
    expect(screen.getByText('Hi!')).toBeInTheDocument();
    expect(screen.getByText('API Message')).toBeInTheDocument();
  });

  test('has stat-tile class', () => {
    const { container } = render(<HelloMessage />);
    const tile = container.querySelector('.stat-tile');
    expect(tile).toBeInTheDocument();
  });
});
