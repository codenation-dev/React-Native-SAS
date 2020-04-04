/**
 * @flow
 */

import * as React from 'react';

import Step from '../Step/Step';
import StepTitle from '../StepTitle/StepTitle';
import StepDescription from '../StepDescription/StepDescription';
import Steps from '../Steps/Steps';
import Subtitle from '../Subtitle/Subtitle';
import Header from '../Header/Header';
import Content from '../Content/Content';
import StepInstructions from '../StepInstructions';

import {color} from '../../styles';

import steps from '../../steps.json';

const LookSteps = ({onFinish}) => {
  const [stepBlocked, setStepBlocked] = React.useState(true);
  const LockStep = () => setStepBlocked(true);
  const unLockStep = () => setStepBlocked(false);

  return (
    <React.Fragment>
      <Header>
        <Subtitle color={color.light}>Bem-vindo ao programa</Subtitle>
      </Header>
      <Content>
        <Steps
          steps={steps}
          onFinish={onFinish}
          stepBlocked={stepBlocked}
          LockStep={LockStep}>
          {({currentStep}) => (
            <Step key={currentStep.id}>
              <StepTitle>{currentStep.name}</StepTitle>
              <StepDescription>{currentStep.text}</StepDescription>
              <StepInstructions
                instructions={currentStep.instructions}
                enableStep={() => {
                  unLockStep();
                  console.log(LockStep);
                }}
              />
            </Step>
          )}
        </Steps>
      </Content>
    </React.Fragment>
  );
};

export default LookSteps;
