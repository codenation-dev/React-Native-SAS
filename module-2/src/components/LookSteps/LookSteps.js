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

import {color} from '../../styles';

import steps from '../../steps.json';

const LookSteps = () => {
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
              <View>
              <Button onPress={visibilityList}>
                {visibleList ? 'Esconder' : 'Mostrar'} Instruções
              </Button>            
              {visibleList &&(               
                 <FlatList 
                 data={currentStep.instructions}                 
                 keyExtractor={(item) => item.id.toString()}
                 renderItem={({item}) =>
                 <React.Fragment>
                   <View>
                     <Switch 
                      value={isFinished}
                      disabled={isFinished}
                      onChange={finishedTask}
                     />
                   </View>
                   <Text style={styles2.text, isFinished && texts.strikeThrough}>item.text</Text>
                 </React.Fragment>
                 }
               />
              )}           
              </View>
            </Step>
          )}
        </Steps>
      </Content>
    </React.Fragment>
  );
};

const styles2 = {
  instruction: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },
  text: {
    marginHorizontal: 10,
    flex: 1
  }
}

export default LookSteps;
