/**
 * @flow
 */

import * as React from 'react';

import Header from '../../components/Header/Header';
import Content from '../../components/Content/Content';
import Step from '../../components/Step/Step';
import StepTitle from '../../components/StepTitle/StepTitle';
import StepDescription from '../../components/StepDescription/StepDescription';
import Steps from '../../components/Steps/Steps';
import Subtitle from '../../components/Subtitle/Subtitle';
import StepInstructions from '../../components/StepInstructions/StepInstructions';
import StepInstruction from '../../components/StepInstruction/StepInstruction';

import {CONGRATULATIONS, ONBOARDING_LOOK_STEPS} from '../../router/routes';

import {color} from '../../styles';

import steps from '../../steps.json';

const LookSteps = ({route, navigation}) => {
  const {stepID = 1} = route.params;

  const goToCongratulations = () =>
    navigation.navigate(CONGRATULATIONS, {isStepsCompleted: true});

  const onForwardStep = () =>
    navigation.navigate(ONBOARDING_LOOK_STEPS, {stepID: stepID + 1});

  const onBehindStep = () =>
    navigation.navigate(ONBOARDING_LOOK_STEPS, {stepID: stepID - 1});

  const currentStep = steps.find(step => step.id === String(stepID));

  return (
    <React.Fragment>
      <Header>
        <Subtitle color={color.light}>Bem-vindo ao programa </Subtitle>
      </Header>
      <Content>
        <Steps
          currentStepId={currentStep.id}
          lastStepId={steps[steps.length - 1].id}
          onForward={onForwardStep}
          onBehind={onBehindStep}
          onFinish={goToCongratulations}>
          <Step key={currentStep.id}>
            <StepTitle>{currentStep.name}</StepTitle>
            <StepDescription>{currentStep.text}</StepDescription>
            <StepInstructions
              instructions={currentStep.instructions}
              renderInstruction={instruction => (
                <StepInstruction>{instruction.text}</StepInstruction>
              )}
            />
          </Step>
        </Steps>
      </Content>
    </React.Fragment>
  );
};

export default LookSteps;
