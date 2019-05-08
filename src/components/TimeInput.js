// @flow
import React  from 'react';
import styled from 'styled-components';

type TimeInputProps = {
  isStarted    : boolean,
  minutes      : number,
  seconds      : number,
  handleChange : () => void,
};

const TimeInput = ({
  isStarted,
  minutes,
  seconds,
  handleChange,
}: TimeInputProps) => {
  if (isStarted) {
    return null;
  }

  return (
    <TimeInput.Wrapper>
      <TimeInput.Container>
        <label htmlFor="minutes">Minutes</label>
        <TimeInput.Input
          id="minutes"
          name="minutes"
          type="number"
          min="0"
          max="59"
          value={minutes}
          onChange={handleChange}
        />
      </TimeInput.Container>
      <TimeInput.Container>
        <label htmlFor="seconds">Seconds</label>
        <TimeInput.Input
          id="seconds"
          name="seconds"
          type="number"
          min="0"
          max="59"
          value={seconds}
          onChange={handleChange}
        />
      </TimeInput.Container>
    </TimeInput.Wrapper>
  );
};

TimeInput.Wrapper = styled.div`
  display         : flex;
  flex-direction  : row;
  justify-content : space-evenly;
  width           : 200px;
  margin-bottom   : 15px;
`;

TimeInput.Container = styled.div`
  display        : flex;
  flex-direction : column;
  align-items    : center;
`;

TimeInput.Input = styled.input`
  width         : 60px;
  border        : 1px solid #c5c5c5;
  border-radius : 5px;
  font-size     : 22px;
  text-align    : center;

  &:focus {
    outline: none;
  }
`;

export default TimeInput;
