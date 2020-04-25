/**
 * @flow
 */

import * as React from 'react';
import {ActivityIndicator, Dimensions} from 'react-native';
import styled, {ThemeContext} from 'styled-components';

const dimensions = Dimensions.get('window');

const Content = styled.View`
  width: ${dimensions.width}px;
  height: ${dimensions.height}px;
  justify-content: center;
  align-content: center;
  background: ${props => props.theme.colors.light};
  position: absolute;
  top: 0;
  left: 0;
`;

const Loading = ({isLoading, children}) => {
  const theme = React.useContext(ThemeContext);

  return (
    <Content>
      <ActivityIndicator
        size="large"
        animating={isLoading}
        color={theme.colors.primary}
      />
      {children}
    </Content>
  );
};

Loading.defaultProps = {
  isLoading: true,
};

export default Loading;
