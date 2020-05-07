/**
 * @flow
 */

import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Title from '../../components/Title/Title';
import Header from '../../components/Header/Header';
import Content from '../../components/Content/Content';
import Subtitle from '../../components/Subtitle/Subtitle';

import {color, sizes, getFontSizeStyle, colors} from '../../styles';
import {dimensions} from '../../config';

const Home = () => {
  return (
    <Content>
      <Header>
        <Subtitle>PARABÉNS</Subtitle>
      </Header>
      <View style={styles.home}>
        <View>
          <Title color={color.dark}>Você está oficialmente no programa</Title>
          <Text style={styles.text}>
            Parabéns, você concluiu com sucesso todos os passos inicias para
            entrar no programa #AceleraDev.
          </Text>
        </View>
      </View>
    </Content>
  );
};

const styles = {
  home: {
    padding: 25,
    backgroundColor: colors.white,
    minHeight: dimensions.height - 200,
  },
  text: StyleSheet.compose(
    getFontSizeStyle(sizes.small),
    {
      marginVertical: 25,
      alignSelf: 'flex-start',
    },
  ),
};

export default Home;
