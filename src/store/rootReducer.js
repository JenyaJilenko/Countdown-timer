// @flow
import { combineReducers } from 'redux';

import TimerReducer from '../modules/countdown/TimerReducer';

export const rootReducer = combineReducers({
  timer: TimerReducer,
});

