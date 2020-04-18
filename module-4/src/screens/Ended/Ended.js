/**
 * @flow
 */

import * as React from 'react';
import {View} from 'react-native';

import Title from '../../components/Title/Title';
import Header from '../../components/Header/Header';
import Content from '../../components/Content/Content';

import {ONBOARDING_LOOK_STEPS} from '../../router/routes';

import {color} from '../../styles';

const Welcome = ({navigation}) => {
  const goToLookSteps = () => navigation.navigate(ONBOARDING_LOOK_STEPS);

  return (
    <React.Fragment>
      <Header />
      <Content>
        <View style={styles.home}>
          <Title color={color.dark}>Parabéns</Title>
        </View>
      </Content>
    </React.Fragment>
  );
};

const styles = {
  home: {
    marginVertical: 25,
    paddingHorizontal: 15,
  },
  text: {
    marginVertical: 25,
  },
};

export default Welcome;
