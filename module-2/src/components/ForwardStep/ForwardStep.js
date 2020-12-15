/**
 * @flow
 */

import * as React from 'react';
import {StyleSheet} from 'react-native';

import Button from '../Button/Button';

import {color, sizes, getFontSizeStyle, getFontColorStyle} from '../../styles';

const ForwardStep = ({children, onForward, disabled}) => {
  return (
    <Button style={styles.text} onPress={onForward} disabled={disabled}>
      {children}
    </Button>
  );
};

const styles = {
  text: StyleSheet.flatten([
    {
      fontWeight: '600',
    },
    getFontColorStyle(color.light),
    getFontSizeStyle(sizes.medium),
  ]),
};

export default ForwardStep;
