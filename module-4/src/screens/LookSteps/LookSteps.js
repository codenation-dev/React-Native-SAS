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

import {
  ONBOARDING_HOME,
  ONBOARDING,
  ONBOARDING_LOOK_STEPS,
} from '../../router/routes';

import {color} from '../../styles';

import steps from '../../steps.json';

const LookSteps = ({navigation, route}) => {
  const [currentStep, setCurrentStep] = React.useState([]);
  const [stepId, setStepId] = React.useState(route.params.stepId);

  React.useEffect(() => {
    const current = steps.find(step => step.id === String(stepId));
    setCurrentStep(current);
  }, [stepId]);

  const goBackToHome = () =>
    navigation.navigate(ONBOARDING_HOME, {isStepsCompleted: true});

  const onForwardStep = () => {
    if (stepId >= steps.length) {
      setStepId(1);
    } else {
      setStepId(stepId + 1);
    }
    return navigation.navigate(ONBOARDING_LOOK_STEPS, {stepId});
  };
  const onBackwardStep = () => {
    setStepId(stepId - 1);
    return navigation.navigate(ONBOARDING_LOOK_STEPS, {stepId});
  };

  return (
    <React.Fragment>
      <Header>
        <Subtitle color={color.light}>Bem-vindo ao programa</Subtitle>
      </Header>
      <Content>
        <Steps
          firstStep={currentStep}
          onForward={onForwardStep}
          onBackward={onBackwardStep}
          lastStep={steps.length}>
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
