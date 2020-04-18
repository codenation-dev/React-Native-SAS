import * as React from 'react';
import {Text, View} from 'react-native';

import Title from '../../components/Title/Title';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import Content from '../../components/Content/Content';

import {ONBOARDING_HOME} from '../../router/routes';

import {color} from '../../styles';

const Congratulations = ({navigation}) => {
  const goToHome = () =>
    navigation.navigate(ONBOARDING_HOME, {isStepsCompleted: true});

  return (
    <React.Fragment>
      <Header />
      <Content>
        <View style={styles.home}>
          <Title color={color.dark}>Parabéns!</Title>
          <Text style={styles.text}>
            Parabéns Você completou todos os passos agora você é um dev!
          </Text>
          <Button primary={true} onPress={goToHome}>
            Voltar a tela inicial
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

export default Congratulations;
