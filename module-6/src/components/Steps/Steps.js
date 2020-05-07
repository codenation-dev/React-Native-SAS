/**
 * @flow
 */

import * as React from 'react';

import StepActions from '../StepActions/StepActions';
import ForwardStep from '../ForwardStep/ForwardStep';

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
    [firstStep, nextStep, nextSteps],
  );

  const nextCurrentStep = React.useMemo(() => stepsToGo[currentStep.id], [
    currentStep,
    stepsToGo,
  ]);

  const forwardStep = () => {
    setCurrentStep(nextCurrentStep);

    if (onForward) {
      onForward(nextCurrentStep);
    }
  };

  return (
    <React.Fragment>
      {children({currentStep})}
      <StepActions>
        <ForwardStep onForward={forwardStep}>
          {nextCurrentStep.id === firstStep.id
            ? 'VOLTAR AO INICIO'
            : 'PROXIMO PASSO'}
        </ForwardStep>
      </StepActions>
    </React.Fragment>
  );
};

export default Steps;
