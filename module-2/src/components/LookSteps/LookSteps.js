/**
 * @flow
 */

import React, {useState, useEffect} from 'react';

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
import {FlatList, Text} from 'react-native';

const LookSteps = ( { onFinish } ) => {
  const [showInstructions, setShowInstructions] = useState(false);
  const [ checked, setChecked ] = useState([]);
  console.disableYellowBox = true;

  useEffect(() => {
    let instructions = [];

    steps.map(item => {
      item.instructions.map(instruction => {
        instruction.checked = false;
        instructions.push(instruction);
      })
    })

    setChecked(instructions);
  }, [])

  const handleCheck = id => {
    let flag = true;
    const instructions = checked.map(instruction => {

      if( instruction.id == id ){
          instruction.checked = true;
      }

      if( instruction.checked == false ) {
          flag = false;
      }

      return instruction;
    });

    if(flag) {
      onFinish();
    }

    setChecked( instructions );
  }

  const toggleInstructions = () => {
    setShowInstructions(!showInstructions);
  };

  return (
    <React.Fragment>
      <Header>
        <Subtitle color={color.light}>Bem-vindo ao programa</Subtitle>
      </Header>
      <Content>
        <Steps steps={steps}>
          {({currentStep}) => (
            <Step key={currentStep.id}>
              <StepTitle>{currentStep.name}</StepTitle>
              <StepDescription>{currentStep.text}</StepDescription>
              {/* hide */}
              <Text
                style={styles.instructionsLink}
                onPress={toggleInstructions}>
                {!showInstructions ? 'MOSTRAR' : 'ESCONDER'} INSTRUÇÕES
              </Text>

              <FlatList
                style={
                  showInstructions
                    ? styles.instructionList
                    : styles.instructionListHide
                }
                data={currentStep.instructions}
                renderItem={({item}) => <StepInstructions item={item} handleCheck={ handleCheck } />}
                keyExtractor={item => item.id}
              />
            </Step>
          )}
        </Steps>
      </Content>
    </React.Fragment>
  );
};

const styles = {
  instructionsLink: {
    fontWeight: 'bold',
    color: '#7159c1',
    paddingTop: 10,
    paddingLeft: 10,
  },
  instructionList: {
    height: null,
  },
  instructionListHide: {
    height: 0,
  },
};

export default LookSteps;
