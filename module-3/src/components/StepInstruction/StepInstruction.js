/**
 * @flow
 */

import * as React from 'react';
import {Switch} from 'react-native';
import styled, {css} from 'styled-components';

const Step = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
`;

const Instruction = styled.Text`
  flex: 1;
  margin-horizontal: 10px;

  ${props =>
    props.isCompleted &&
    css`
      text-decoration-style: solid;
      text-decoration-line: line-through;
    `}
`;

const StepInstruction = ({children}) => {
  const [isCompleted, setAsCompleted] = React.useState(false);

  const completeInstruction = () => setAsCompleted(true);

  return (
    <Step>
      <Switch
        value={isCompleted}
        disabled={isCompleted}
        onChange={completeInstruction}
      />
      <Instruction isCompleted={isCompleted}>{children}</Instruction>
    </Step>
  );
};

export default StepInstruction;
