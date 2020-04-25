/**
 * @flow
 */

import * as React from 'react';

import Header from '../../components/Header/Header';
import Content from '../../components/Content/Content';
import Step from '../../components/Step/Step';
import StepTitle from '../../components/StepTitle/StepTitle';
import StepDescription from '../../components/StepDescription/StepDescription';
import Subtitle from '../../components/Subtitle/Subtitle';
import StepInstructions from '../../components/StepInstructions/StepInstructions';
import StepInstruction from '../../components/StepInstruction/StepInstruction';
import StepActions from '../../components/StepActions/StepActions';
import ForwardStep from '../../components/ForwardStep/ForwardStep';
import BackwardStep from '../../components/BackwardStep/BackwardStep';

import {
  ONBOARDING_LOOK_STEP,
  ACCELERATION,
  ONBOARDING,
} from '../../router/routes';

import {color} from '../../styles';
import steps from '../../steps.json';

const LookStep = ({navigation, route}) => {
  const stepId = route.params && route.params.stepId;

  const step = React.useMemo(() => steps.find(step => step.id === stepId), [
    stepId,
  ]);

  const isLastStep = steps.indexOf(step) === steps.length - 1;
  const isFirstStep = steps.indexOf(step) === 0;

  const nextStepId = !isLastStep ? steps[steps.indexOf(step) + 1].id : null;

  React.useEffect(() => {
    !stepId && navigation.setParams({stepId: steps[0].id});
  }, [navigation, stepId]);

  const goToAccelerationHome = () => navigation.navigate(ACCELERATION);

  const goToLookNextStep = () =>
    navigation.push(ONBOARDING_LOOK_STEP, {
      stepId: nextStepId,
    });

  const onForwardStep = () => {
    if (!nextStepId) {
      goToAccelerationHome();
    } else {
      goToLookNextStep();
    }
  };

  const goToLookPreviousStep = () => navigation.goBack();

  const onBackwardStep = () => goToLookPreviousStep();

  return (
    <React.Fragment>
      <Header>
        <Subtitle color={color.light}>Bem-vindo ao programa</Subtitle>
      </Header>
      <Content>
        {step && (
          <Step>
            <StepTitle>{step.name}</StepTitle>
            <StepDescription>{step.text}</StepDescription>
            <StepInstructions
              instructions={step.instructions}
              renderInstruction={instruction => (
                <StepInstruction>{instruction.text}</StepInstruction>
              )}
            />
          </Step>
        )}
        <StepActions>
          <BackwardStep onBackward={onBackwardStep}>
            {isFirstStep ? 'VOLTAR AO INICIO' : 'PASSO ANTERIOR'}
          </BackwardStep>
          <ForwardStep onForward={onForwardStep}>
            {isLastStep ? 'FINALIZAR' : 'PROXIMO PASSO'}
          </ForwardStep>
        </StepActions>
      </Content>
    </React.Fragment>
  );
};

export default LookStep;
