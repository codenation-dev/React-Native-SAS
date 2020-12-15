import * as React from 'react';
import {View, ScrollView, Dimensions} from 'react-native';

import ForwardStep from '../ForwardStep/ForwardStep';

import {colors} from '../../styles';

const Steps = ({children, steps, shouldProceed, onFinish}) => {
  const [stepIndex, setNextStepIndex] = React.useState(0);

  const currentStep = steps[stepIndex];
  const lastId = steps[steps.length - 1].id;
  const lastStep = currentStep.id === lastId;

  const forwardStep = () => {
    lastStep ? onFinish() : setNextStepIndex(stepIndex + 1);
  };

  return (
    <View style={styles.content}>
      <ScrollView style={styles.steps} contentInsetAdjustmentBehavior="automatic">
        {children({currentStep})}
      </ScrollView>
      <View style={[styles.stepActions, { backgroundColor: !shouldProceed ? '#dddddd' : colors.primary}]}>
        <ForwardStep onForward={forwardStep} disabled={!shouldProceed}>
          {lastStep ? 'VOLTAR AO INICIO' : 'PROXIMO PASSO'}
        </ForwardStep>
      </View>
    </View>
  );
};

const styles = {
  content: {
    flex: 1,
  },
  steps: {
    paddingTop: 25,
    marginBottom: 90,
  },
  stepActions: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: Dimensions.get('window').width,
    height: 90,
    backgroundColor: colors.primary,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
};

export default Steps;
