import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

describe('Header', () => {
  it('renders a menu', () => {
    render(<Header />);
    const heading = screen.getByRole('navigation');
    expect(heading).toBeInTheDocument();
  });
});
