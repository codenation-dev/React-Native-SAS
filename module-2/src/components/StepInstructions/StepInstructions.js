import * as React from 'react';

import {FlatList, View, StyleSheet} from 'react-native';
import Button from '../Button/Button';
import StepInstruction from '../StepInstruction/StepInstruction';
import {color} from '../../styles';

const StepInstructions = ({instructions, isFinished}) => {
  const [showInstructions, setShowInstructions] = React.useState(false);
  const [instructionsChecked, setInstructionsChecked] = React.useState([]);

  React.useEffect(() => {
    isFinished(instructionsChecked.length === instructions.length);
  }, [instructionsChecked]);

  const handleCheckItems = (instruction, isChecked) => {
    if (isChecked) {
      setInstructionsChecked([...instructionsChecked, instruction]);
    } else {
      setInstructionsChecked(
        instructionsChecked.filter(i => i.id !== instruction.id),
      );
    }
  };

  return (
    <View style={styles.container}>
      <Button onPress={() => setShowInstructions(!showInstructions)} color={color.primary}>
        {`${showInstructions ? 'ESCONDER' : 'MOSTRAR'} INSTRUÇÕES`}
      </Button>
      <FlatList
        style={{ display: showInstructions ? 'flex' : 'none' }}
        data={instructions}
        renderItem={({item}) => (
          <StepInstruction
            item={item}
            itemChecked={(instruction, isChecked) =>
              handleCheckItems(instruction, isChecked)
            }
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default StepInstructions;

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  item: {
    flexDirection: 'row',
    alignContent: 'center',
  },
  text: {
    marginBottom: 15,
  },
});
