/**
 * @flow
 */

import * as React from 'react';
import {ImageBackground, Animated, Easing} from 'react-native';
import styled from 'styled-components';

const Content = styled.View`
  width: 75%;
  margin: 0;
  padding: 15px;
  background-color: rgba(0, 0, 0, 0.8);
`;

const animationDefaultValues = {
  showUp: 0,
};

const animationValues = {
  showUp: -100,
};

const Header = ({children, isAnimated}) => {
  const animationInitialValues = isAnimated
    ? animationValues
    : animationDefaultValues;

  const showUpAnimation = React.useRef(
    new Animated.Value(animationInitialValues.showUp),
  ).current;

  const showUp = Animated.timing(showUpAnimation, {
    toValue: 0,
    easing: Easing.back(),
    duration: 1000,
  });

  React.useEffect(() => {
    isAnimated && showUp.start();
  }, [isAnimated, showUp]);

  return (
    <Animated.View style={{translateY: showUpAnimation}}>
      <ImageBackground
        accessibilityRole={'image'}
        source={require('../../assets/codenation.jpg')}
        style={styles.header}
        imageStyle={styles.image}>
        {children && <Content>{children}</Content>}
      </ImageBackground>
    </Animated.View>
  );
};

const styles = {
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
    paddingVertical: 50,
    paddingHorizontal: 0,
  },
  image: {
    overflow: 'visible',
    resizeMode: 'cover',
  },
};

Header.defaultProps = {
  isAnimated: false,
};

export default Header;
