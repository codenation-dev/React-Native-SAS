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

import {color} from '../../styles';

const Welcome = ({navigation}) => {
  const goToLookSteps = () => navigation.navigate(ONBOARDING_LOOK_STEP);

  return (
    <React.Fragment>
      <Header />
      <Content>
        <View style={styles.home}>
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
