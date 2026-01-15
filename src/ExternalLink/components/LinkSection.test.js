import React from 'react';
import { render, screen } from '@testing-library/react';
import LinkSection from './LinkSection';

describe('LinkSection', () => {
  test('renders section title', () => {
    render(<LinkSection title="Test Section"><div>Child</div></LinkSection>);
    expect(screen.getByText('Test Section')).toBeInTheDocument();
  });

  test('renders children', () => {
    render(
      <LinkSection title="Test Section">
        <span>Child 1</span>
        <span>Child 2</span>
      </LinkSection>
    );
    expect(screen.getByText('Child 1')).toBeInTheDocument();
    expect(screen.getByText('Child 2')).toBeInTheDocument();
  });

  test('has correct CSS classes', () => {
    render(<LinkSection title="Test Section"><div>Child</div></LinkSection>);
    const title = screen.getByText('Test Section');
    expect(title).toHaveClass('link-section-title');
  });
});
