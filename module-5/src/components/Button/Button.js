/**
 * @flow
 */

import * as React from 'react';
import {Text, TouchableHighlight} from 'react-native';

import {color, colors, getFontColorStyle} from '../../styles';

export const getColorStyleByProps = colors =>
  Object.keys(colors)
    .filter(color => colors[color] === true)
    .map(color => ({
      button: styles[`button${color}`],
      text: styles[`text${color}`],
    }))[0];

const Button = ({
  children,
  style,
  buttonStyle,
  light,
  dark,
  primary,
  secondary,
  disabled,
  onPress,
  color: colorProp,
}) => {
  const colorStyle =
    getColorStyleByProps({
      [color.light]: light,
      [color.dark]: dark,
      [color.primary]: primary,
      [color.secondary]: secondary,
    }) || {};

  return (
    <TouchableHighlight
      accessibilityRole="button"
      underlayColor="transparent"
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.button,
        colorStyle.button,
        disabled && styles.buttonDisabled,
        buttonStyle,
      ]}>
      <Text
        style={[
          styles.text,
          colorStyle.text,
          style,
          colorProp && getFontColorStyle(colorProp),
          disabled && styles.textDisabled,
        ]}>
        {children}
      </Text>
    </TouchableHighlight>
  );
};

const styles = {
  button: {
    padding: 15,
  },
  buttonDisabled: {
    backgroundColor: colors.light,
  },
  textDisabled: {
    color: colors.gray,
  },
  [`button${color.light}`]: {
    backgroundColor: colors.white,
  },
  [`button${color.dark}`]: {
    backgroundColor: colors.dark,
  },
  [`button${color.primary}`]: {
    backgroundColor: colors.primary,
  },
  [`button${color.secondary}`]: {
    backgroundColor: colors.secondary,
  },
  text: {
    fontWeight: 'bold',
  },
  [`text${color.white}`]: getFontColorStyle(color.dark),
  [`text${color.dark}`]: getFontColorStyle(color.light),
  [`text${color.primary}`]: getFontColorStyle(color.light),
  [`text${color.secondary}`]: getFontColorStyle(color.light),
};

Button.defaultProps = {
  light: false,
  dark: false,
  primary: false,
  secondary: false,
  disabled: false,
};

export default Button;
