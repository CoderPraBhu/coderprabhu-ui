import React from 'react';
import { render, screen } from '@testing-library/react';
import StatsSection from './StatsSection';

describe('StatsSection', () => {
  test('renders section title', () => {
    render(<StatsSection title="Stats"><div>Child</div></StatsSection>);
    expect(screen.getByText('Stats')).toBeInTheDocument();
  });

  test('renders children', () => {
    render(
      <StatsSection title="Stats">
        <span>Stat 1</span>
        <span>Stat 2</span>
      </StatsSection>
    );
    expect(screen.getByText('Stat 1')).toBeInTheDocument();
    expect(screen.getByText('Stat 2')).toBeInTheDocument();
  });

  test('has correct CSS classes', () => {
    render(<StatsSection title="Stats"><div>Child</div></StatsSection>);
    const title = screen.getByText('Stats');
    expect(title).toHaveClass('stats-section-title');
  });
});
