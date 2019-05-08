// @flow
import * as R     from 'ramda';
import * as React from 'react';
import styled     from 'styled-components';

type SpeedButtonsProps = {
  speedLevel        : number,
  handleSpeedChange : Function,
};

const speedLevels = [
  { id: 1, level: '1X' },
  { id: 2, level: '1.5X' },
  { id: 3, level: '2X' },
];

const SpeedButtons = ({ speedLevel, handleSpeedChange }: SpeedButtonsProps) => (
  <SpeedButtons.Wrapper>
    {
      R.map(item => {
        const id    = R.prop('id', item);
        const level = R.prop('level', item);

        return (
          <SpeedButtons.Button
            key={id}
            selected={Number(R.replace('X', '', level)) === speedLevel}
            onClick={handleSpeedChange.bind(null, R.prop('level', item))}
          >
            {R.prop('level', item)}
          </SpeedButtons.Button>
        )
      })(speedLevels)
    }
  </SpeedButtons.Wrapper>
);

SpeedButtons.Wrapper = styled.div`
  display         : flex;
  flex-direction  : row;
  justify-content : space-between;
  width           : 300px;
  margin-top      : 15px;
`;

SpeedButtons.Button = styled.button`
  width         : 30%;
  height        : 35px;
  border        : 1px solid #9fa8da;
  border-radius : 5px;
  font-size     : 16px;
  background    : ${props => props.selected ? '#9fa8da' : '#fff'};
  color         : ${props => props.selected ? '#fff' : '#9fa8da'};
  cursor        : pointer;
  outline       : none;
  box-sizing    : border-box;
  transition    : all 0.2s ease-in-out;
`;

export default SpeedButtons;
