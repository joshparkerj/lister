import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect } from 'chai';

import App from './App';

// https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#configuring-your-testing-environment
globalThis.IS_REACT_ACT_ENVIRONMENT = true;

it('renders without crashing', () => {
  const user = userEvent.setup();
  render(<App />);
  const listTitleInput = screen.getByLabelText(/List Title/i);
  user.pointer({ keys: '[MouseLeft]', target: listTitleInput })
    .then(() => { user.keyboard('test list one{Enter}'); })
    .then(() => { user.keyboard('test list two{Enter}'); })
    .then(() => {
      const listOne = screen.getByText('test list one');
      const listTwo = screen.getByText('test list two');
      expect(listOne).toBeInTheDocument();
      expect(listTwo).toBeInTheDocument();
    });
});
