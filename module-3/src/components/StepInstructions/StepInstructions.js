/**
 * @flow
 */

import * as React from 'react';
import {FlatList} from 'react-native';
import styled from 'styled-components';

import Button from '../Button/Button';

const Instructions = styled.View`
  flex: 1;
  margin-vertical: 15px;
`;

const ToggleInstructions = styled(Button)`
  color: ${props => props.theme.colors.primary};
`;

const StepInstructions = ({instructions, renderInstruction}) => {
  const [showInstructions, setToShowInstructions] = React.useState(false);

  const toggleInstructions = () => setToShowInstructions(!showInstructions);

  return (
    <Instructions>
      <ToggleInstructions onPress={toggleInstructions}>
        {showInstructions ? 'ESCONDER' : 'MOSTRAR'} INSTRUÇÕES
      </ToggleInstructions>
      {showInstructions && (
        <FlatList
          data={instructions}
          keyExtractor={instruction => instruction.id}
          renderItem={({item}) => renderInstruction(item)}
        />
      )}
    </Instructions>
  );
};

export default StepInstructions;
