/**
 * @flow
 */

import * as React from 'react';
import {Text, StyleSheet} from 'react-native';

import {color, sizes, getFontColorStyle, getFontSizeStyle} from '../../styles';

const Title = ({children, color, style}) => {
  return (
    <Text style={[styles.title, style, getFontColorStyle(color)]}>
      {children}
    </Text>
  );
};

const styles = {
  title: StyleSheet.compose(
    {
      fontWeight: '700',
    },
    getFontSizeStyle(sizes.large),
  ),
};

Title.defaultProps = {
  color: color.white,
};

export default Title;
