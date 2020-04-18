/**
 * @flow
 */

import * as React from 'react';
import {Switch, Text, View} from 'react-native';
import {texts} from '../../styles';

const StepInstruction = ({children}) => {
  const [isCompleted, setAsCompleted] = React.useState(false);

  const completeInstruction = () => setAsCompleted(true);

  return (
    <View style={styles.instruction}>
      <Switch
        value={isCompleted}
        disabled={isCompleted}
        onChange={completeInstruction}
      />
      <Text style={[styles.text, isCompleted && texts.strikeThrough]}>
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
