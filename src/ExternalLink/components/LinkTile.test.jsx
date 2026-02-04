import React from 'react';
import { render, screen } from '@testing-library/react';
import LinkTile from './LinkTile';

describe('LinkTile', () => {
  const defaultProps = {
    description: 'Test Link',
    link: 'https://example.com',
    logo: 'test-logo.png'
  };

  test('renders with description', () => {
    render(<LinkTile {...defaultProps} />);
    expect(screen.getByText('Test Link')).toBeInTheDocument();
  });

  test('renders as a link with correct href', () => {
    render(<LinkTile {...defaultProps} />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', 'https://example.com');
  });

  test('opens link in new tab', () => {
    render(<LinkTile {...defaultProps} />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  test('renders logo image', () => {
    render(<LinkTile {...defaultProps} />);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', 'test-logo.png');
    expect(img).toHaveAttribute('alt', 'Test Link');
  });

  test('has correct CSS class', () => {
    render(<LinkTile {...defaultProps} />);
    const link = screen.getByRole('link');
    expect(link).toHaveClass('link-tile');
  });
});
