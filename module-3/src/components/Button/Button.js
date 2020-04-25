/**
 * @flow
 */

import * as React from 'react';
import styled, {css} from 'styled-components';

import {colors} from '../../styles';

const Touchable = styled.TouchableHighlight`
  padding: 15px;

  ${props =>
    props.primary &&
    css`
      background-color: ${props => props.theme.colors.primary};
    `}

  ${props =>
    props.secondary &&
    css`
      background-color: ${props => props.theme.colors.secondary};
    `}

  ${props =>
    props.light &&
    css`
      background-color: ${props => props.theme.colors.white};
    `}

  ${props =>
    props.dark &&
    css`
      background-color: ${props => props.theme.colors.dark};
    `}

  ${props =>
    props.disabled &&
    css`
      background-color: ${props => props.theme.colors.light};
    `}
`;

const TouchableText = styled.Text`
  font-weight: bold;

  ${props =>
    props.light &&
    css`
      color: ${props => props.theme.colors.dark};
    `}

  ${props =>
    props.dark &&
    css`
      color: ${props => props.theme.colors.light};
    `}

  ${props =>
    props.primary &&
    css`
      color: ${props => props.theme.colors.light};
    `}

  ${props =>
    props.secondary &&
    css`
      color: ${props => props.theme.colors.light};
    `}

  ${props =>
    props.disabled &&
    css`
      color: ${props => props.theme.colors.gray};
    `}
`;

const Button = ({
  children,
  primary,
  secondary,
  light,
  dark,
  disabled,
  onPress,
  style,
}) => {
  return (
    <Touchable
      accessibilityRole="button"
      underlayColor="transparent"
      primary={primary}
      secondary={secondary}
      light={light}
      dark={dark}
      disabled={disabled}
      onPress={onPress}>
      <TouchableText
        primary={primary}
        secondary={secondary}
        light={light}
        dark={dark}
        disabled={disabled}
        style={style}>
        {children}
      </TouchableText>
    </Touchable>
  );
};

Button.defaultProps = {
  light: false,
  dark: false,
  primary: false,
  secondary: false,
};

export default Button;
