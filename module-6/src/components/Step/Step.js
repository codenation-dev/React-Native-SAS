/**
 * @flow
 */

import * as React from 'react';

import {View} from 'react-native';

import styles from '../../styles';

const Step = ({children}) => {
  return (
    <View style={style.container}>
      <View style={style.step}>
        <View style={styles.sectionContainer}>{children}</View>
      </View>
    </View>
  );
};

const style = {
  container: {
    flex: 1,
  },
  step: {
    paddingVertical: 25,
    marginBottom: 90,
  },
};

export default Step;
