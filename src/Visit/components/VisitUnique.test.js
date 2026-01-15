import React from 'react';
import { render, screen } from '@testing-library/react';
import VisitUnique from './VisitUnique';

describe('VisitUnique', () => {
  test('renders with default count', () => {
    render(<VisitUnique />);
    expect(screen.getByText('0')).toBeInTheDocument();
    expect(screen.getByText('Unique Visitors')).toBeInTheDocument();
  });

  test('has stat-tile class', () => {
    const { container } = render(<VisitUnique />);
    const tile = container.querySelector('.stat-tile');
    expect(tile).toBeInTheDocument();
  });
});
