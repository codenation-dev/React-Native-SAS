/**
 * @flow
 */

import * as React from 'react';
import {Animated, Dimensions} from 'react-native';
import styled from 'styled-components';

import Title from '../Title/Title';
import Button from '../Button/Button';
import Header from '../Header/Header';
import Content from '../Content/Content';
import FadeIn from '../FadeIn/FadeIn';

import {colors} from '../../styles';

const Main = styled.View`
  margin-vertical: 25px;
  padding-horizontal: 15px;
`;

const WelcomeText = styled.Text`
  margin-vertical: 25px;
`;

const Home = ({onStart, isFinished}) => {
  const buttonAnimation = React.useRef(
    new Animated.Value(Dimensions.get('window').height),
  ).current;

  const showUp = Animated.timing(buttonAnimation, {
    toValue: 0,
    duration: 1000,
  });

  showUp.start();

  return (
    <React.Fragment>
      <Header isAnimated={true} />
      <Content>
        <FadeIn>
          <Main>
            <Title color={colors.dark}>SEJA MUITO BEM VINDO!</Title>
            <WelcomeText>
              Parabéns por você fazer parte do programa #AceleraDev sobre React
              Native, estamos muito felizes de ter você por aqui.
              {'\n\n'}
              Aqui você vai encontrar os próximos passos que você precisa dar
              para estar tudo certo para iniciar as aulas do programa. Bora lá?!
            </WelcomeText>
            <Animated.View style={{translateY: buttonAnimation}}>
              <Button disabled={isFinished} primary={true} onPress={onStart}>
                VAMOS LÁ
              </Button>
            </Animated.View>
          </Main>
        </FadeIn>
      </Content>
    </React.Fragment>
  );
};

export default Home;
