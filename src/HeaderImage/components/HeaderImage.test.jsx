import React from 'react';
import { render, screen } from '@testing-library/react';
import HeaderImage from './HeaderImage';

describe('HeaderImage', () => {
  test('renders workspace image', () => {
    render(<HeaderImage />);
    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('alt', 'workspace');
  });

  test('has correct CSS class on image', () => {
    render(<HeaderImage />);
    const img = screen.getByRole('img');
    expect(img).toHaveClass('header-image');
  });

  test('renders overlay element', () => {
    const { container } = render(<HeaderImage />);
    const overlay = container.querySelector('.header-overlay');
    expect(overlay).toBeInTheDocument();
  });

  test('renders container with correct class', () => {
    const { container } = render(<HeaderImage />);
    const containerEl = container.querySelector('.header-image-container');
    expect(containerEl).toBeInTheDocument();
  });
});
