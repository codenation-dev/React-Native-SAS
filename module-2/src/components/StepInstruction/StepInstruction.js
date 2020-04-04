/**
 * @flow
 */

import * as React from 'react';
import {Text, View} from 'react-native';

const StepInstruction = ({children}) => {
  return (
    <View style={styles.instruction}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

const styles = {
  instruction: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },
  text: {
    marginHorizontal: 10,
    flex: 1,
  },
};

export default StepInstruction;
