import * as React from 'react';
import Step from '../Step/Step';
import StepTitle from '../StepTitle/StepTitle';
import StepDescription from '../StepDescription/StepDescription';
import StepInstructions from '../StepInstructions/StepInstructions';
import Steps from '../Steps/Steps';
import Subtitle from '../Subtitle/Subtitle';
import Header from '../Header/Header';
import Content from '../Content/Content';

import {color} from '../../styles';

import steps from '../../steps.json';

const LookSteps = ({onFinish}) => {
  const [isFinished, setIsFinished] = React.useState(false);
  const [shouldProceed, setShouldProceed] = React.useState(false);

  React.useEffect(() => {
    setShouldProceed(isFinished);
  }, [isFinished]);

  const handleInstructions = (value) => {
    setIsFinished(value);
  };

  return (
    <React.Fragment>
      <Header>
        <Subtitle color={color.light}>Bem-vindo ao programa</Subtitle>
      </Header>
      <Content>
        <Steps steps={steps} shouldProceed={shouldProceed} onFinish={onFinish}>
          {({currentStep}) => (
            <Step key={currentStep.id}>
              <StepTitle>{currentStep.name}</StepTitle>
              <StepDescription>{currentStep.text}</StepDescription>
              <StepInstructions
                instructions={currentStep.instructions}
                isFinished={(value) => handleInstructions(value)}
              />
            </Step>
          )}
        </Steps>
      </Content>
    </React.Fragment>
  );
};

export default LookSteps;
