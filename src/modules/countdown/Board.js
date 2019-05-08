// @flow
import * as React from 'react';
import styled     from 'styled-components';

type BoardProps = {
  minutes    : number,
  seconds    : number,
  isActive   : boolean,
  speedLevel : number,
};

const substitute = (value: string) => (value < 10 ? `0${value}` : value);

const formattedTime = (time: Object) => {
  const { minutes, seconds } = time;

  return `${substitute(minutes)} : ${substitute(seconds)}`;
};

const Board = ({ minutes, seconds, isActive, speedLevel }: BoardProps) => (
  <Board.Wrapper>
    <Board.Container>
      <Board.Output
        isActive={isActive}
        speedLevel={speedLevel}
        isRed={minutes < 1 && seconds < 20}
        isBlinking={minutes < 1 && seconds < 10}
      >
        {formattedTime({ minutes, seconds})}
      </Board.Output>
    </Board.Container>
  </Board.Wrapper>
);

Board.Wrapper = styled.div`
  display        : flex;
  flex-direction : row;
  align-items    : center;
`;

Board.PauseButton = styled.button`
  border     : none;
  background : transparent;
  cursor     : pointer;
  outline    : none;
`;

Board.Container = styled.div`
  display         : flex;
  justify-content : center;
  width           : 100%;
`;

Board.Output = styled.h1`
  margin    : 0;
  font-size : 92px;
  ${props => props.isRed && props.isActive && `color: red`};
  ${props =>
    props.isBlinking
    && props.isActive
    && `animation: blinker ${1/props.speedLevel}s linear infinite`};

  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }
`;

export default Board;
