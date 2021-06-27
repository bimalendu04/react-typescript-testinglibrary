import React from 'react';
import { render } from '../../test/test-utils';
import {
  createHistory,
  createMemorySource,
  LocationProvider,
} from '@reach/router'

import LayoutContainer from './LayoutContainer';

it('can browse to the about page', async () => {
  // For `LayoutContainer`, you should be able to render the layout container, followed by navigating to the About page.
  const {
    container,
    history: { navigate },
  } = renderWithRouter(<LayoutContainer />)
  const layoutContainer = container;
  expect(layoutContainer).toBeTruthy();
  await navigate('/about')
  expect(container.innerHTML).toMatch('About Page');
});

it('landing on a bad page', () => {
  const { container } = renderWithRouter(<LayoutContainer />, {
    route: '/error',
  })
  expect(container.innerHTML).toMatch('Not Found Page')
});

function renderWithRouter(
  ui,
  { route = '/', history = createHistory(createMemorySource(route)) } = {}
) {
  return {
    ...render(<LocationProvider history={history}>{ui}</LocationProvider>),
    history,
  }
}