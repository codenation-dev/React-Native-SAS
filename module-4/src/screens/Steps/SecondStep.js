import React from 'react';
import {View, Dimensions, ScrollView} from 'react-native';

import StepTitle from '../../components/StepTitle/StepTitle';
import StepDescription from '../../components/StepDescription/StepDescription';
import StepInstructions from '../../components/StepInstructions/StepInstructions';
import StepInstruction from '../../components/StepInstruction/StepInstruction';
import ForwardStep from '../../components/ForwardStep/ForwardStep';
import Step from '../../components/Step/Step';
import Header from '../../components/Header/Header';

import {colors} from '../../styles';

import {
  ONBOARDING_FIRST_STEP,
  ONBOARDING_THIRD_STEP,
} from '../../router/routes';

import steps from '../../steps';

const SecondStep = ({navigation}) => {
  const secondStep = steps.filter(step => {
    return step.id === '2';
  });

  const {id, name, text, instructions} = secondStep[0];

  const backStep = () => navigation.navigate(ONBOARDING_FIRST_STEP);
  const forwardStep = () => navigation.navigate(ONBOARDING_THIRD_STEP);

  return (
    <React.Fragment>
      <Header />
      <ScrollView
        style={styles.steps}
        contentInsetAdjustmentBehavior="automatic">
        <Step key={id}>
          <StepTitle>{name}</StepTitle>
          <StepDescription>{text}</StepDescription>
          <StepInstructions
            instructions={instructions}
            renderInstruction={instruction => (
              <StepInstruction>{instruction.text}</StepInstruction>
            )}
          />
        </Step>
      </ScrollView>
      <View style={styles.stepActions}>
        <ForwardStep onForward={backStep}>VOLTAR</ForwardStep>
        <ForwardStep onForward={forwardStep}>PROXIMO PASSO</ForwardStep>
      </View>
    </React.Fragment>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
};

export default SecondStep;
