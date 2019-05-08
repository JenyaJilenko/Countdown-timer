// @flow
import {
  applyMiddleware,
  compose,
  createStore,
} from 'redux';

import { rootReducer } from './rootReducer';
import loggerMiddleware from './loggerMiddleware';

export default (initialState: Object = {}) => {
  const middlewares = [
    loggerMiddleware,
  ];
  const store = createStore((rootReducer: Object), initialState, compose(applyMiddleware(...middlewares)));

  return store;
};
