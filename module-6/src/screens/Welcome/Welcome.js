/**
 * @flow
 */

import * as React from 'react';
import {Text, View} from 'react-native';

import Title from '../../components/Title/Title';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import Content from '../../components/Content/Content';

import {ONBOARDING_LOOK_STEP} from '../../router/routes';

import {color, colors} from '../../styles';
import {dimensions} from '../../config';

const Welcome = ({navigation}) => {
  const goToLookSteps = () => navigation.navigate(ONBOARDING_LOOK_STEP);

  return (
    <Content>
      <Header />
      <View style={styles.welcome}>
        <Title color={color.dark}>SEJA MUITO BEM VINDO!</Title>
        <Text style={styles.text}>
          Parabéns por você fazer parte do programa #AceleraDev sobre React
          Native, estamos muito felizes de ter você por aqui.
          {'\n\n'}
          Aqui você vai encontrar os próximos passos que você precisa dar para
          estar tudo certo para iniciar as aulas do programa. Bora lá?!
        </Text>
        <Button primary={true} onPress={goToLookSteps}>
          VAMOS LÁ
        </Button>
      </View>
    </Content>
  );
};

const styles = {
  welcome: {
    flex: 1,
    height: dimensions.height - 175,
    marginTop: 25,
    padding: 25,
    background: colors.white,
  },
  text: {
    marginVertical: 25,
  },
};

export default Welcome;
