import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Index from './Index';

describe('<Index />', () => {
  test('it should mount', () => {
    render(<Home />);

    const Home = screen.getByTestId('Home');

    expect(Home).toBeInTheDocument();
  });
});