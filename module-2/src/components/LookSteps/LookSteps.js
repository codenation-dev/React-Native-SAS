/**
 * @flow
 */

import * as React from 'react';
import { View, Switch, FlatList, Text, SafeAreaView} from 'react-native';
import Button from '../Button/Button';

import Step from '../Step/Step';
import StepTitle from '../StepTitle/StepTitle';
import StepDescription from '../StepDescription/StepDescription';
import Steps from '../Steps/Steps';
import Subtitle from '../Subtitle/Subtitle';
import Header from '../Header/Header';
import Content from '../Content/Content';
import FlatListItem from '../FlatListItem/FlatListItem'

import {color} from '../../styles';

import steps from '../../steps.json';

const LookSteps = () => {
  const [visibleList, setVisibility] = React.useState(false);
  const visibilityList = () => setVisibility(!visibleList);
 
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
              <SafeAreaView>
              <Button onPress={visibilityList}>
                {visibleList ? 'Esconder' : 'Mostrar'} Instruções
              </Button>            
              {visibleList &&(               
                 <FlatList 
                  data={currentStep.instructions}                 
                  keyExtractor={(item) => item.id.toString()}
                  renderItem={({item}) => {                  
                   return(
                    <FlatListItem item={item}/>
                   )
                  }}           
                />
              )}           
              </SafeAreaView>
            </Step>
          )}
        </Steps>
      </Content>
    </React.Fragment>
  );
};


export default LookSteps;
