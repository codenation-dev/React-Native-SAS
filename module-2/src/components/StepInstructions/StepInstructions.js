/**
 * @flow
 */

import * as React from 'react';
import {useState} from 'react';
import {FlatList, View, Text, TouchableOpacity} from 'react-native';

const StepInstructions = ({instructions, renderInstruction}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleTouchable = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.instructions}>
      <TouchableOpacity onPress={toggleTouchable}>
        <Text style={styles.text}>
          {!isEnabled ? 'MOSTRAR INSTRUÇÕES' : 'ESCONDER INSTRUÇÕES'}
        </Text>
      </TouchableOpacity>
      <FlatList
        data={instructions}
        renderItem={({item}) => renderInstruction(item)}
        keyExtractor={instruction => instruction.id}
        style={!isEnabled ? {display: 'none'} : {display: 'flex'}}
      />
    </View>
  );
};

