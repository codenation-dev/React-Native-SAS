/**
 * @flow
 */

import * as React from 'react';
import styled from 'styled-components';

const Title = styled.Text`
  font-weight: 600;
  font-size: ${props => props.theme.font.sizes.medium}px;
  color: ${props => props.theme.colors.black};
`;

const StepTitle = ({children}) => {
  return <Title>{children}</Title>;
};

export default StepTitle;
