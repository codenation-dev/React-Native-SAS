/**
 * @flow
 */

import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
  margin: 0;
  background-color: ${props => props.theme.colors.white};
`;

const Content = ({children}) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
};

export default Content;
