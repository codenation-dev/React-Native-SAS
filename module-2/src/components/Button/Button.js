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
  light,
  dark,
  primary,
  secondary,
  color: colorProp,
  onPress,
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
      style={[styles.button, colorStyle.button]}
      onPress={onPress}>
      <Text
        style={[
          style,
          styles.text,
          colorStyle.text,
          colorProp && getFontColorStyle(colorProp),
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
};

export default Button;
