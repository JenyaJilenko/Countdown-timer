// @flow
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import serviceWorker from './serviceWorker';

const mountEl = document.getElementById('root');

const render = () => {
  if (mountEl) {
    return ReactDOM.render(<App />, mountEl);
  }

  throw new Error('React failed to mount, becuase mount element is missing');
};

serviceWorker();

render();
