/**
 * @flow
 */

import * as React from 'react';

import {Text} from 'react-native';

import styles from '../../styles';

const StepDescription = ({children}) => {
  return (
    <Text style={styles.sectionDescription}>
      {children}
    </Text>
  );
};

export default StepDescription;

