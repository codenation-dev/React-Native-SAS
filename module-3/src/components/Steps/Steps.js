/**
 * @flow
 */

import * as React from 'react';
import {Dimensions} from 'react-native';
import styled from 'styled-components';

import ForwardStep from '../ForwardStep/ForwardStep';

const Content = styled.View`
  flex: 1;
`;

const Scroll = styled.ScrollView.attrs({
  contentInsetAdjustmentBehavior: 'automatic',
})`
  padding-top: 25px;
  margin-bottom: 90px;
`;

const Actions = styled.View`
  flex: 1;
  position: absolute;
  bottom: 0;
  left: 0;
  width: ${Dimensions.get('window').width}px;
  height: 90px;
  background-color: ${props => props.theme.colors.primary};
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding-horizontal: 15px;
`;

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

  const nextStepAsCurrent = React.useMemo(() => stepsToGo[currentStep.id], [
    currentStep,
    stepsToGo,
  ]);

  const forwardStep = () => {
    setCurrentStep(nextStepAsCurrent);

    if (onForward) {
      onForward(currentStep);
    }
  };

  return (
    <Content>
      <Scroll>{children({currentStep})}</Scroll>
      <Actions>
        <ForwardStep onForward={forwardStep}>
          {nextStepAsCurrent.id === firstStep.id
            ? 'VOLTAR AO INICIO'
            : 'PROXIMO PASSO'}
        </ForwardStep>
      </Actions>
    </Content>
  );
};

export default Steps;
