/**
 * @flow
 */

import * as React from 'react';
import {Text, View} from 'react-native';

import Title from '../Title/Title';
import Button from '../Button/Button';
import Header from '../Header/Header';
import Content from '../Content/Content';

import {color} from '../../styles';

const Home = ({onStart}) => {
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
          <Button primary={true} onPress={onStart}>
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

export default Home;
