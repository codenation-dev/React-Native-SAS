/**
 * @flow
 */

import {StyleSheet} from 'react-native';

export const getFontColorStyle = color => fonts[`fontColor${color}`];
export const getFontSizeStyle = size => fonts[`fontSize${size}`];

export const colors = {
  black: '#000',
  dark: '#131313',
  white: '#FFF',
  light: '#F0F0F0',
  primary: '#8e3bff',
  secondary: '#be00ff',
};

export const color = {
  black: 'Black',
  dark: 'Dark',
  light: 'Light',
  white: 'White',
  primary: 'Primary',
  secondary: 'Secondary',
};

export const sizes = {
  small: 'Small',
  medium: 'Medium',
  large: 'Large',
};

export const texts = StyleSheet.create({
  strikeThrough: {
    textDecorationStyle: 'solid',
    textDecorationLine: 'line-through',
  },
});

export const fonts = StyleSheet.create({
  [`fontColor${color.black}`]: {
    color: colors.black,
  },
  [`fontColor${color.dark}`]: {
    color: colors.dark,
  },
  [`fontColor${color.white}`]: {
    color: colors.white,
  },
  [`fontColor${color.light}`]: {
    color: colors.light,
  },
  [`fontColor${color.primary}`]: {
    color: colors.primary,
  },
  [`fontColor${color.secondary}`]: {
    color: colors.secondary,
  },
  [`fontSize${sizes.small}`]: {
    fontSize: 18,
  },
  [`fontSize${sizes.medium}`]: {
    fontSize: 24,
  },
  [`fontSize${sizes.large}`]: {
    fontSize: 32,
  },
});

const styles = StyleSheet.flatten([
  fonts,
  texts,
  {
    sectionContainer: {
      marginHorizontal: 0,
      marginVertical: 40,
      paddingHorizontal: 24,
    },
    sectionTitle: StyleSheet.flatten([
      {
        fontWeight: '600',
      },
      getFontColorStyle(color.black),
      getFontSizeStyle(sizes.medium),
    ]),
    sectionDescription: StyleSheet.flatten([
      {
        marginTop: 8,
        fontWeight: '400',
      },
      getFontColorStyle(color.dark),
      getFontSizeStyle(sizes.small),
    ]),
    instructionsContainer: {
      marginLeft: 10
    },
    instructionsTitle: StyleSheet.flatten([
      {
        fontSize: 14,
        marginTop: 30,
        marginBottom: 30
      },
      getFontColorStyle(color.primary),
    ]),
    eachInstructionContainer: {
      display:  'flex',
      flexDirection: 'row',
      alignItems: 'center'
    },
    instructionText: {
      fontSize: 14,
      marginTop: 10,
      marginBottom: 10,
      marginLeft: 15
    },
    instructionTextExecuted: {
      textDecorationLine: 'line-through',
      marginTop: 10,
      marginBottom: 10,
      marginLeft: 15
    }
  },
]);

export default StyleSheet.create(styles);
