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

import {useGeolocation} from '../../hooks/useGeolocation';
import {useOnboardingSteps} from '../../hooks/onboarding/useOnboardingSteps';
import {useOnboardingStorage} from '../../hooks/storage/useOnboardingStorage';
import {useOnboardingCache} from '../../hooks/cache/useOnboardingCache';

import {ONBOARDING_LOOK_STEP, ACCELERATION} from '../../router/routes';

import {color} from '../../styles';

const LookStep = ({navigation, route}) => {
  const {
    stepsInstructionsCompleted: [
      instructionsCompletedInStorage,
      completeStepInstructionInStorage,
    ],
  } = useOnboardingStorage();

  const [
    location,
    {getPosition, isPermitted: isLocationPermitted},
  ] = useGeolocation();

  const stepId = route.params && route.params.stepId;

  const {
    steps,
    currentStep: step,
    nextStep,
    isFirstStep,
    isLastStep,
  } = useOnboardingSteps(stepId, {location});

  React.useEffect(() => {
    isLocationPermitted && getPosition();
  }, [isLocationPermitted]);

  React.useEffect(() => {
    !stepId && step && navigation.setParams({stepId: step.id});
  }, [stepId]);

  const onCompleteInstruction = instructionId =>
    completeStepInstructionInStorage(instructionId);

  const backwardStep = () => navigation.goBack();

  const forwardStep = () =>
    nextStep &&
    navigation.push(ONBOARDING_LOOK_STEP, {
      stepId: nextStep.id,
    });

  const finishOnboarding = () =>
    finishOnboardingInCache().then(() => navigation.navigate(ACCELERATION));

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
                <StepInstruction
                  isCompleted={instructionsCompletedInStorage.includes(
                    instruction.id,
                  )}
                  onCompleted={() => onCompleteInstruction(instruction.id)}>
                  {instruction.text}
                </StepInstruction>
              )}
            />
          </Step>
        )}
        <StepActions>
          {isFirstStep ? (
            <BackwardStep onBackward={backwardStep}>
              VOLTAR AO INICIO
            </BackwardStep>
          ) : (
            <BackwardStep onBackward={backwardStep}>
              PASSO ANTERIOR
            </BackwardStep>
          )}
          {isLastStep ? (
            <ForwardStep onForward={finishOnboarding}>FINALIZAR</ForwardStep>
          ) : (
            <ForwardStep onForward={forwardStep}>PROXIMO PASSO</ForwardStep>
          )}
        </StepActions>
      </Content>
    </React.Fragment>
  );
};

export default LookStep;
