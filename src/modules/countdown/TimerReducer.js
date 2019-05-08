// @flow
import * as R from 'ramda';

import { START } from './TimerActions';

export const STATE_KEY = 'timer';

export type TimerState = {
  +timer: number,
};

const initialState: TimerState = {
  timer: null,
};

const TimerReducer = (state: TimerState = initialState, action: Object) => {
  switch (action.type) {
    case START: {
      return R.assoc(STATE_KEY, action.payload, state);
    }
    default: {
      return state;
    }
  }
};

export default TimerReducer;
