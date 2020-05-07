/**
 * @flow
 */

import * as React from 'react';
import {Text} from 'react-native';

import Title from '../../components/Title/Title';
import Header from '../../components/Header/Header';
import Content from '../../components/Content/Content';
import Subtitle from '../../components/Subtitle/Subtitle';

import {color} from '../../styles';

const Home = () => {
  return (
    <React.Fragment>
      <Header>
        <Subtitle>PARABÉNS</Subtitle>
      </Header>
      <Content style={styles.content}>
        <Title color={color.dark}>Você está oficialmente no programa</Title>
        <Text style={styles.congrats}>
          Parabéns, você concluiu com sucesso todos os passos inicias para
          entrar no programa #AceleraDev.
        </Text>
      </Content>
    </React.Fragment>
  );
};

const styles = {
  content: {
    padding: 25,
  },
  congrats: {
    marginVertical: 25,
  },
};

export default Home;
