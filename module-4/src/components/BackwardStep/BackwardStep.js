/**
 * @flow
 */

import * as React from 'react';
import {StyleSheet} from 'react-native';

import Button from '../Button/Button';

import {color, sizes, getFontSizeStyle, getFontColorStyle} from '../../styles';

const BackwardStep = ({children, onBackward}) => {
  return (
    <Button style={styles.text} onPress={onBackward}>
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
    getFontSizeStyle(sizes.small),
  ]),
};

export default BackwardStep;
