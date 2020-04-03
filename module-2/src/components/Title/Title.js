/**
 * @flow
 */

import * as React from 'react';
import {Text, StyleSheet} from 'react-native';

import {color, sizes, getFontColorStyle, getFontSizeStyle} from '../../styles';

const Title = ({children, color}) => {
  return (
    <Text style={[styles.title, getFontColorStyle(color)]}>
      {children}
    </Text>
  );
};

const styles = {
  title: StyleSheet.compose(
    {
      fontWeight: '600',
    },
    getFontSizeStyle(sizes.large),
  ),
};

Title.defaultProps = {
  color: color.white,
};

export default Title;
