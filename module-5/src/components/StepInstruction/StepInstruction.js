/**
 * @flow
 */

import * as React from 'react';
import {Switch, Text, View} from 'react-native';

import {texts} from '../../styles';

const StepInstruction = ({children, onCompleted, isCompleted}) => {
  const [asCompleted, setAsCompleted] = React.useState(isCompleted);

  const completeInstruction = () => {
    setAsCompleted(true);
    onCompleted();
  };

  return (
    <View style={styles.instruction}>
      <Switch
        value={asCompleted}
        disabled={asCompleted}
        onChange={completeInstruction}
      />
      <Text style={[styles.text, asCompleted && texts.strikeThrough]}>
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

StepInstruction.defaultProps = {
  isCompleted: false,
};

export default StepInstruction;
