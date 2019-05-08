// @flow
import * as React from 'react';
import styled     from 'styled-components';

type ButtonProps = {
  children  : React.Node,
  onClick   : () => void,
  isStarted : ?boolean,
  color     : string,
};

const Button = ({
  children,
  onClick,
  isStarted,
  color,
}: ButtonProps) => (
  <Button.Wrapper
    onClick={onClick}
    disabled={isStarted}
    color={color}
  >
    {children}
  </Button.Wrapper>
);

Button.defaultProps = {
  isStarted: false,
};

Button.Wrapper = styled.button`
  width         : 100px;
  height        : 35px;
  border        : 1px solid ${props => props.color};
  border-radius : 5px;
  font-size     : 16px;
  background    : ${props => props.color};
  color         : #fff;
  cursor        : pointer;
  outline       : none;
  box-sizing    : border-box;
  transition    : all 0.2s ease-in-out;

  &:hover {
    background : rgba(255, 255, 255, 0.3);
    border     : 1px solid ${props => props.color};
    color      : ${props => props.color};
  }

  &:disabled {
    background : #cfc5b9;
    border     : 1px solid #cfc5b9;
    color      : #fff;
    cursor     : not-allowed;
  }
`;

export default Button;
