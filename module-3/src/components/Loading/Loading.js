/**
 * @flow
 */

import * as React from 'react';
import {Dimensions} from 'react-native';
import styled from 'styled-components';

import Spinner from '../Spinner/Spinner';

const dimensions = Dimensions.get('window');

const Content = styled.View`
  width: ${dimensions.width}px;
  height: ${dimensions.height}px;
  justify-content: center;
  align-content: center;
  background: ${props => props.color || props.theme.colors.primary};
  position: absolute;
  top: 0;
  left: 0;
`;

const Loading = ({isLoading, color, children}) => {
  return (
    isLoading && (
      <Content color={color}>
        <Spinner />
        {children}
      </Content>
    )
  );
};

Loading.defaultProps = {
  isLoading: true,
};

export default Loading;
