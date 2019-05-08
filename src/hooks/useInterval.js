import { useEffect, useRef } from "react";

const useInterval = (callback, isActive, delay) => {
  const savedCallback = useRef();
  const intervalId = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => {
      savedCallback.current();
    }

    if (isActive && delay !== null) {
      const id = setInterval(tick, delay);
      intervalId.current = id;

      return () => clearInterval(intervalId.current);
    }
  }, [delay, isActive]);

  const clearIntervalId = () => {
    clearInterval(intervalId.current);
  };

  return () => {
    clearIntervalId();
  };
};

export default useInterval;
