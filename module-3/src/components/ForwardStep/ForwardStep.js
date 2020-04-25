/**
 * @flow
 */

import * as React from 'react';
import styled from 'styled-components';

import Button from '../Button/Button';

const Forward = styled(Button)`
  color: ${props => props.theme.colors.light};
  font-size: ${props => props.theme.font.sizes.medium}px;
`;

const ForwardStep = ({children, onForward}) => {
  return <Forward onPress={onForward}>{children}</Forward>;
};

export default ForwardStep;
