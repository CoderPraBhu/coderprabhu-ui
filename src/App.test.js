import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders profile hero', () => {
    const { container } = render(<App />);
    const profileHero = container.querySelector('.profile-hero');
    expect(profileHero).toBeInTheDocument();
  });

  test('renders GitHub Repositories section', () => {
    render(<App />);
    expect(screen.getByText('GitHub Repositories')).toBeInTheDocument();
  });

  test('renders all GitHub links', () => {
    render(<App />);
    expect(screen.getByText('All Projects')).toBeInTheDocument();
    expect(screen.getByText('CoderPraBhu.com UI')).toBeInTheDocument();
    expect(screen.getByText('CoderPraBhu.com API')).toBeInTheDocument();
    expect(screen.getByText('CoderPraBhu.com K8S')).toBeInTheDocument();
  });

  test('renders Social section', () => {
    render(<App />);
    expect(screen.getByText('Social')).toBeInTheDocument();
  });

  test('renders social links', () => {
    render(<App />);
    expect(screen.getByText('Twitter')).toBeInTheDocument();
    expect(screen.getByText('LinkedIn')).toBeInTheDocument();
  });

  test('renders Stats section', () => {
    render(<App />);
    expect(screen.getByText('Stats')).toBeInTheDocument();
  });

  test('renders stat labels', () => {
    render(<App />);
    expect(screen.getByText('Total Visits')).toBeInTheDocument();
    expect(screen.getByText('Unique Visitors')).toBeInTheDocument();
    expect(screen.getByText('API Message')).toBeInTheDocument();
    expect(screen.getByText('Your Device')).toBeInTheDocument();
  });

  test('GitHub links have correct hrefs', () => {
    render(<App />);
    const allProjectsLink = screen.getByText('All Projects').closest('a');
    expect(allProjectsLink).toHaveAttribute('href', 'https://github.com/CoderPraBhu');

    const uiLink = screen.getByText('CoderPraBhu.com UI').closest('a');
    expect(uiLink).toHaveAttribute('href', 'https://github.com/CoderPraBhu/coderprabhu-ui');
  });

  test('social links have correct hrefs', () => {
    render(<App />);
    const twitterLink = screen.getByText('Twitter').closest('a');
    expect(twitterLink).toHaveAttribute('href', 'https://twitter.com/CoderPraBhu');

    const linkedInLink = screen.getByText('LinkedIn').closest('a');
    expect(linkedInLink).toHaveAttribute('href', 'https://linkedin.com/in/prashantbhuruk');
  });
});
