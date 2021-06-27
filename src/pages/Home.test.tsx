import React from 'react';
import { render } from '../../test/test-utils';

import Home from './Home';

it('renders <Home /> page', () => {
  // You should be able to show that you can verify Home rendered correctly
  const { queryByTitle, queryByText } = render(<Home />);
  
  const title = queryByText('Welcome!');
  const goToAbout = queryByText('Go to about');
  
  expect(title).toBeTruthy();
  expect(goToAbout).toBeTruthy();
});

