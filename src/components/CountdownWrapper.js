// @flow
import * as React from 'react';
import styled     from 'styled-components';

type CountdownWrapperProps = {
  children: React.Node,
};

const CountdownWrapper = ({ children }: CountdownWrapperProps) => (
  <CountdownWrapper.Wrapper>
    {children}
  </CountdownWrapper.Wrapper>
);

CountdownWrapper.Wrapper = styled.div`
  display        : flex;
  flex-direction : column;
  align-items    : center;
`;

export default CountdownWrapper;
