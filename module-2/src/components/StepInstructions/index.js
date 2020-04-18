import React from 'react';
import {View, Text, FlatList, Switch, SafeAreaView} from 'react-native';
import {colors} from '../../styles';

const StepInstructions = ({instructions, enableStep}) => {
  const [instructionsView, setInstructionsView] = React.useState(false);

  const [inscructionsCheked, setInscructionsCheked] = React.useState({});

  function handleShowInstructions() {
    setInstructionsView(!instructionsView);
  }

  React.useEffect(() => {
    const data = instructions.reduce((total, atual) => {
      if (!total[atual.id]) {
        total[atual.id] = false;
      }
      return total;
    }, {});

    setInscructionsCheked(data);
  }, [instructions]);

  React.useEffect(() => {
    const allChecked = instructions.reduce((total, atual) => {
      total = false;
      if (inscructionsCheked[atual.id]) {
        total = true;
      }
      return total;
    }, false);

    if (allChecked) {
      console.log('liberar');
      enableStep();
    }
  }, [instructions, inscructionsCheked, enableStep]);

  function handleCheckInstruction(id) {
    if (!inscructionsCheked[id]) {
      const newInstructionData = {
        ...inscructionsCheked,
        [id]: true,
      };
      setInscructionsCheked(newInstructionData);
    }
  }

  return (
    <View>
      <Text style={styles.H1Instructions} onPress={handleShowInstructions}>
        {instructionsView ? 'Esconder Instruções' : 'Mostrar Instruções'}
      </Text>
      {instructionsView &&
        instructions.map(item => (
          <View key={item.id} style={styles.instruction}>
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              value={inscructionsCheked[item.id]}
              onValueChange={() => handleCheckInstruction(item.id)}
              disabled={inscructionsCheked[item.id]}
            />
            <Text
              style={[
                inscructionsCheked[item.id] && styles.chekedInstructionText,
                {flex: 1, flexWrap: 'wrap'},
              ]}>
              {item.text}
            </Text>
          </View>
        ))}
    </View>
  );
};

const styles = {
  H1Instructions: {
    color: colors.primary,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  instruction: {
    padding: 5,
    flexDirection: 'row',
    marginBotton: '20',
  },
  chekedInstructionText: {
    textDecorationLine: 'line-through',
  },
};

export default StepInstructions;
