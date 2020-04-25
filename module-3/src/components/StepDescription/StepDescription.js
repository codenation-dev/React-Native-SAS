/**
 * @flow
 */

import * as React from 'react';
import styled from 'styled-components';

const Description = styled.Text`
  margin-top: 8px;
  font-weight: 400;
  font-size: ${props => props.theme.font.sizes.small}px;
  color: ${props => props.theme.colors.dark};
`;

const StepDescription = ({children}) => {
  return <Description>{children}</Description>;
};

export default StepDescription;
