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

import {ONBOARDING_HOME} from '../../router/routes';

import {color} from '../../styles';

import steps from '../../steps.json';

const LookSteps = ({navigation}) => {
  const goBackToHome = () =>
    navigation.navigate(ONBOARDING_HOME, {isStepsCompleted: true});

  const onForwardStep = nextStep =>
    steps.indexOf(nextStep) === 0 && goBackToHome();

  return (
    <React.Fragment>
      <Header>
        <Subtitle color={color.light}>Bem-vindo ao programa</Subtitle>
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
