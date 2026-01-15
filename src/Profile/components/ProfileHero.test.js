import React from 'react';
import { render, screen } from '@testing-library/react';
import ProfileHero from './ProfileHero';

describe('ProfileHero', () => {
  test('renders profile name', () => {
    render(<ProfileHero />);
    expect(screen.getByText('Prashant Bhuruk')).toBeInTheDocument();
  });

  test('renders profile title', () => {
    render(<ProfileHero />);
    expect(screen.getByText('Senior Software Development Engineer')).toBeInTheDocument();
  });

  test('renders profile photo', () => {
    render(<ProfileHero />);
    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('alt', 'Prashant Bhuruk');
  });

  test('renders bio text', () => {
    render(<ProfileHero />);
    expect(screen.getByText(/14\+ years of experience/)).toBeInTheDocument();
  });

  test('has correct CSS class', () => {
    const { container } = render(<ProfileHero />);
    const hero = container.querySelector('.profile-hero');
    expect(hero).toBeInTheDocument();
  });
});
