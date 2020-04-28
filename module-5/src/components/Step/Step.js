/**
 * @flow
 */

import * as React from 'react';

import {ScrollView, View} from 'react-native';

import styles from '../../styles';

const Step = ({children}) => {
  return (
    <View style={style.container}>
      <ScrollView style={style.step} contentInsetAdjustmentBehavior="automatic">
        <View style={styles.sectionContainer}>{children}</View>
      </ScrollView>
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
