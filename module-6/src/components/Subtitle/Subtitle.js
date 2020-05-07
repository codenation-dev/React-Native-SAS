/**
 * @flow
 */

import * as React from 'react';
import {Text, StyleSheet} from 'react-native';

import {color, sizes, getFontColorStyle, getFontSizeStyle} from '../../styles';

const Subtitle = ({children, style, color}) => {
  return (
    <Text style={[styles.subtitle, style, getFontColorStyle(color)]}>
      {children}
    </Text>
  );
};

const styles = {
  subtitle: StyleSheet.compose(
    {
      fontWeight: '600',
    },
    getFontSizeStyle(sizes.medium),
  ),
};

Subtitle.defaultProps = {
  color: color.light,
};

export default Subtitle;
