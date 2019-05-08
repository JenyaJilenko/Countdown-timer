// @flow
import * as R from 'ramda';
import React, {
  useState,
  useCallback,
}             from "react";

import Controls         from '../../components/Controls';
import TimeInput        from "../../components/TimeInput";
import Button           from "../../components/Button";
import CountdownWrapper from "../../components/CountdownWrapper";
import SpeedButtons     from '../../components/SpeedButtons';

import useInterval from '../../hooks/useInterval';

import Board from './Board';

const CountdownPanel = () => {
  const [isStarted, setIsStarted]   = useState(false);
  const [isActive, setIsActive]     = useState(false);
  const [startTime, setStartTime]   = useState(0);
  const [phrase, setPhrase]         = useState('Lets’s run the countdown timer!');
  const [board, setBoard]           = useState({ minutes: 0, seconds: 0 });
  const [duration, setDuration]     = useState(0);
  const [speedLevel, setSpeedLevel] = useState(1);

  const handleChange      = ({ target }) => setBoard({ ...board, [target.name]: target.value });
  const handleSpeedChange = (level: string) => setSpeedLevel(Number(R.replace('X', '', level)));

  const start = () => {
    if (!board.minutes && !board.seconds) {
      return;
    };

    const minutesInMilliseconds = board.minutes * 60000;
    const secondsInMilliseconds = board.seconds * 1000;
    const totalTime             = minutesInMilliseconds + secondsInMilliseconds;

    setIsStarted(true);
    setIsActive(true);
    setStartTime(Date.now() + totalTime);
    setDuration(totalTime);
    setPhrase('Good joob');
  };

  const stop = () => {
    clearIntervalId();
    setIsActive(false);
  };

  const reset = () => {
    clearIntervalId();
    setIsStarted(false);
    setIsActive(false);
    setBoard({ minutes: 0, seconds: 0 });
  };

  const updateTime = useCallback(() => {
    const remaining        = startTime - Date.now();
    const currentTimerTime = getTime(remaining);

    if (remaining < duration/2) {
      setPhrase('More than halfway there!');
    }

    if (remaining > 0) {
      setBoard({ ...currentTimerTime });
    } else {
      setPhrase('Time’s up!');
      reset();
    }
  }, [startTime, reset, duration]);

  const clearIntervalId = useInterval(
    () => {
      if (isActive) {
        updateTime();
      }
    }, isActive, 1000/speedLevel);

  const getTime = (remaining: number) => {
    const remainingTime = new Date(remaining);
    const minutes       = remainingTime.getUTCMinutes();
    const seconds       = remainingTime.getUTCSeconds();

    return { minutes, seconds };
  };

  return (
    <CountdownWrapper>
      <h3>Countdown:</h3>
      <TimeInput
        isStarted={isStarted}
        handleChange={handleChange}
        minutes={R.prop('minutes', board)}
        seconds={R.prop('seconds', board)}
      />
      <div>{phrase}</div>
      <Board
        minutes={R.prop('minutes', board)}
        seconds={R.prop('seconds', board)}
        isActive={isActive}
        speedLevel={speedLevel}
      />
      <Button
        onClick={start}
        isStarted={isStarted}
        color={'#FF8328'}
      >
        START
      </Button>
      <Controls
        start={start}
        stop={stop}
        reset={reset}
        isStarted={isStarted}
        isActive={isActive}
      />
      <SpeedButtons
        speedLevel={speedLevel}
        handleSpeedChange={handleSpeedChange}
      />
    </CountdownWrapper>
  );
};

export default CountdownPanel;
