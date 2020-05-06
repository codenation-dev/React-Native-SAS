import * as React from 'react';

import {create as render} from 'react-test-renderer';

import App from '../App';

describe('integration | App', () => {
  describe('when the app is rendering', () => {
    it('renders the app without crashing', () => {
      render(<App />);
    });
  });
});
