/**
 * @flow
 */

import React, {useState} from 'react';

import {View, Text, Switch} from 'react-native';

const styles = {
  container: {
    flexDirection: 'row',
    paddingTop: 15,
  },
  instruction: {
    paddingLeft: 10,
    fontSize: 16,
  },
  instructionRisk: {
    paddingLeft: 10,
    fontSize: 16,
    textDecorationLine: 'line-through',
  },
};

const StepInstructions = ({item, handleCheck}) => {
  const [toggleSwitch, setToggleSwitch] = useState(item.checked);

  const handleSwitch = () => {
    if (!toggleSwitch) {
      setToggleSwitch(!toggleSwitch);
      handleCheck( item.id );
    }
  };
  return (
    <View style={styles.container}>
      <Switch onValueChange={handleSwitch} value={toggleSwitch} />
      <Text style={!toggleSwitch ? styles.instruction : styles.instructionRisk}>
        {item.text}
      </Text>
    </View>
  );
};

export default StepInstructions;
