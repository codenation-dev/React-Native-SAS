/**
 * @flow
 */

import * as React from 'react';
import {FlatList, View} from 'react-native';

import Button from '../Button/Button';

import {color} from '../../styles';

const StepInstructions = ({instructions, renderInstruction}) => {
  return (
    <View style={styles.instructions}>
      <FlatList
        data={instructions}
        keyExtractor={instruction => instruction.id}
        renderItem={({item}) => renderInstruction(item)}
      />
    </View>
  );
};

const styles = {
  instructions: {
    flex: 1,
    marginVertical: 15,
  },
};

export default StepInstructions;
