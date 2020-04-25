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

const Steps = ({children, currentStep, steps, onForward}) => {
  const stepsToGo = React.useMemo(
    () =>
      steps.reduce(
        (nextStepsToGo, step, i) => ({
          ...nextStepsToGo,
          [step.id]: i < steps.length - 1 ? steps[i + 1] : step,
        }),
        {},
      ),
    [steps],
  );

  const nextStep = React.useMemo(() => stepsToGo[currentStep.id], [
    currentStep,
    stepsToGo,
  ]);

  const forwardStep = () => {
    onForward && onForward(nextStep);
  };

  return (
    <Content>
      <Scroll>{children}</Scroll>
      <Actions>
        <ForwardStep onForward={forwardStep}>
          {currentStep.id === nextStep.id
            ? 'FINALIZAR PASSOS'
            : 'PROXIMO PASSO'}
        </ForwardStep>
      </Actions>
    </Content>
  );
};

export default Steps;
