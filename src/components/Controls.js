// @flow
import React  from "react";
import styled from 'styled-components';

import Button from './Button';

type ControlsProps = {
  start     : () => void,
  stop      : () => void,
  reset     : () => void,
  isStarted : boolean,
  isActive  : boolean,
};

const Controls = ({
  start,
  stop,
  reset,
  isStarted,
  isActive,
}: ControlsProps) => (
  <>
    {isStarted && (
      <Controls.Wrapper>
        <Button
          isActive={isActive}
          onClick={isActive ? stop : start}
          color={isActive ? '#ED0101' : '#00AA63'}
        >
          {isActive ? 'PAUSE' : 'RESUME'}
        </Button>
        <Button
          onClick={reset}
          color={'#3300A5'}
        >
          RESET
        </Button>
      </Controls.Wrapper>
    )}
  </>
);

Controls.Wrapper = styled.div`
  display         : flex;
  flex-direction  : row;
  width           : 300px;
  justify-content : space-evenly;
  margin-top      : 15px;
  margin-bottom   : 15px;
`;

export default Controls;

