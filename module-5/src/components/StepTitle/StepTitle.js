/**
 * @flow
 */

import * as React from 'react';

import {Text} from 'react-native';

import styles from '../../styles';

const StepTitle = ({children}) => {
  return (
    <Text style={styles.sectionTitle}>
      {children}
    </Text>
  );
};

export default StepTitle;
