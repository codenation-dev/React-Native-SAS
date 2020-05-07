/**
 * @flow
 */

import * as React from 'react';
import {ScrollView} from 'react-native';

const Content = ({children, style}) => {
  return (
    <ScrollView contentContainerStyle={[styles.body, style]}>
      {children}
    </ScrollView>
  );
};

const styles = {
  body: {
    textAlign: 'left',
  },
};

export default Content;
