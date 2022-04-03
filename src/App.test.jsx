import React from 'react';
import { render } from '@testing-library/react';

import App from './App';

// https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#configuring-your-testing-environment
globalThis.IS_REACT_ACT_ENVIRONMENT = true;

// eslint-disable-next-line no-undef
it('renders without crashing', () => {
  render(<App />);
});
