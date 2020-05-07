/**
 * @flow
 */

import * as React from 'react';
import {StyleSheet} from 'react-native';

import Button from '../Button/Button';

import {color, sizes, getFontSizeStyle, getFontColorStyle} from '../../styles';

const ForwardStep = ({children, onForward, disabled}) => {
  return (
    <Button
      buttonStyle={styles.button}
      style={styles.text}
      onPress={onForward}
      disabled={disabled}>
      {children}
    </Button>
  );
};

const styles = {
  button: {
    backgroundColor: 'transparent',
  },
  text: StyleSheet.flatten([
    {
      fontWeight: '600',
    },
    getFontColorStyle(color.white),
    getFontSizeStyle(sizes.small),
  ]),
};

export default ForwardStep;
