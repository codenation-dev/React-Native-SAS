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
      <Switch
        trackColor={{false: '#ff6961', true: '#00ff00'}}
        thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
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
