/**
 * @flow
 */

import * as React from 'react';

import {View} from 'react-native';

import styles from '../../styles';

const Step = ({children}) => {
  return (
    <View style={styles.sectionContainer}>
      {children}
    </View>
  );
};

export default Step;
