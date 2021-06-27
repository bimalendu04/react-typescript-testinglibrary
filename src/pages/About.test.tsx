import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, fireEvent } from '../../test/test-utils';
import appReducer from '../redux/reducers';
import * as types from '../redux/types';

import About from './About';
import { useDispatch } from 'react-redux';
import { incrementOne } from '../redux/actions/sample';

it('renders <About /> page', () => {
  // You should be able to verify the About page rendered correctly.
  const { queryByTitle, queryByText } = render(<About />)
  const heading = queryByText('About Page');
  const buttonIncrement = queryByText('Increment');
  const displayCount = queryByTitle('displayCount');
  expect(heading).toBeTruthy();
  expect(buttonIncrement).toBeTruthy();
  expect(displayCount).toBeTruthy();
});

it('clicks button and fires increment counter', () => {
  // You should be able to click the increment button and verify the count.

  const { queryByTitle, queryByText } = render(<About />);

  const buttonIncrement = queryByText('Increment');
  fireEvent.click(buttonIncrement);
  const displayCount = queryByTitle('displayCount');
  expect(displayCount.innerHTML).toBe('Current Count: 1');
});

it('should return the initial state', () => {
  expect(appReducer(undefined, { type: types })).toEqual(
    {
      sample: {
        counter: 0
      }
    }
  )
});

it('should return the updated result from 0', () => {
  const previousState = {
    sample: {
      counter: 0
    }
  }

  expect(appReducer(previousState, incrementOne)).toEqual(
    {
      sample: {
        counter: 1
      }
    }
  )
});

