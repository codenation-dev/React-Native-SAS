/**
 * @flow
 */

import * as React from 'react';
import {useState} from 'react';
import {Text, View, Switch} from 'react-native';

const StepInstruction = ({children}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.instruction}>
      />
      <Text
        style={
          (styles.text,
          isEnabled
            ? {textDecorationLine: 'line-through'}
            : {textDecorationLine: 'none'})
        }>
        {children}
      </Text>
    </View>
  );
};
