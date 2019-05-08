// @flow
import React from 'react';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import CountdownPanel from './modules/countdown';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <CountdownPanel />
    </Provider>
  );
}

export default App;
