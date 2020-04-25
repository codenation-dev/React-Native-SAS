/**
 * @flow
 */

import * as React from 'react';
import styled from 'styled-components';

import Step from '../Step/Step';
import StepTitle from '../StepTitle/StepTitle';
import StepDescription from '../StepDescription/StepDescription';
import Steps from '../Steps/Steps';
import Subtitle from '../Subtitle/Subtitle';
import Header from '../Header/Header';
import Content from '../Content/Content';
import StepInstructions from '../StepInstructions/StepInstructions';
import StepInstruction from '../StepInstruction/StepInstruction';

import steps from '../../steps.json';

const HeaderTitle = styled(Subtitle)`
  text-align: center;
  color: ${props => props.theme.colors.light};
`;

const LookSteps = ({onFinish}) => {
  const onForwardStep = currentStep => {
    if (steps.indexOf(currentStep) === steps.length - 1) {
      onFinish();
    }
  };

  return (
    <React.Fragment>
      <Header>
        <HeaderTitle>Bem-vindo ao programa</HeaderTitle>
      </Header>
      <Content>
        <Steps steps={steps} onForward={onForwardStep}>
          {({currentStep}) => (
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
          )}
        </Steps>
      </Content>
    </React.Fragment>
  );
};

export default LookSteps;
