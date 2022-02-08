import React from 'react';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router, BrowserRouter } from 'react-router-dom';
import Home from '../../pages/Home';

import '@testing-library/jest-dom';

const renderWithRouter = (ui, {route = '/'} = {}) => {
  window.history.pushState({}, 'Test page', route)

  return render(ui, {wrapper: BrowserRouter})
}

describe('Home', () => {
  it('should appear an h1 with "Simulador de Investimentos" on screen', () => {
    const { getByRole } = renderWithRouter(<Home />);
    const titleElement = getByRole('heading', { level: 1, name: 'Simulador de Investimentos' });
    expect(titleElement).toBeInTheDocument();
  });
});
