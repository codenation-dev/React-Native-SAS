/**
 * @flow
 */

import * as React from 'react';
import {View, ScrollView, Dimensions} from 'react-native';

import ForwardStep from '../ForwardStep/ForwardStep';

import {colors} from '../../styles';

const Steps = ({children, steps: [firstStep, ...nextSteps], onForward}) => {
  const [currentStep, setCurrentStep] = React.useState(firstStep);
  const [nextStep] = nextSteps;

  const stepsToGo = React.useMemo(
    () =>
      nextSteps.reduce(
        (nextStepsToGo, step, i) => ({
          ...nextStepsToGo,
          [step.id]: i < nextSteps.length - 1 ? nextSteps[i + 1] : firstStep,
        }),
        {
          [firstStep.id]: nextStep,
        },
      ),
    [firstStep.id, nextStep, nextSteps],
  );

  const stepsToGoBack = React.useMemo(
    () =>
      nextSteps.reduce(
        (nextStepsToGo, step, i) => ({
          ...nextStepsToGo,
          [step.id]: i < 1 ? firstStep : nextSteps[i - 1],
        }),
        {
          [firstStep.id]: nextStep,
        },
      ),
    [firstStep.id, nextStep, nextSteps],
  );

  const nextCurrentStep = React.useMemo(() => stepsToGo[currentStep.id], [
    currentStep,
    stepsToGo,
  ]);

  const backCurrentStep = React.useMemo(() => stepsToGoBack[currentStep.id], [
    currentStep,
    stepsToGoBack,
  ]);

  const forwardStep = () => {
    setCurrentStep(nextCurrentStep);

    if (onForward) {
      onForward(nextCurrentStep);
    }
  };

  const backStep = () => {
    setCurrentStep(backCurrentStep);
  };

  return (
    <View style={styles.content}>
      <ScrollView
        style={styles.steps}
        contentInsetAdjustmentBehavior="automatic">
        {children({currentStep})}
      </ScrollView>
      <View style={styles.stepActions}>
        <ForwardStep onForward={backStep}>VOLTAR</ForwardStep>
        <ForwardStep onForward={forwardStep}>
          {nextCurrentStep.id === firstStep.id ? 'FINALIZAR' : 'PROXIMO PASSO'}
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
