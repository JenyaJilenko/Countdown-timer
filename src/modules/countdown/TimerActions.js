const namespace = 'TIMER';

export const START = `${namespace}/START`;

export const start = (timer: number) => ({
  type: START,
  payload: {
    timer,
  },
});
