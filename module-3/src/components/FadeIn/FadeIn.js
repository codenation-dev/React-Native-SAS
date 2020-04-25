/**
 * @flow
 */

import * as React from 'react';
import {Animated} from 'react-native';

const FadeIn = ({children}) => {
  const animation = React.useRef(new Animated.Value(0)).current;

  const fadeIn = Animated.timing(animation, {
    toValue: 1,
    duration: 800,
    delay: 300,
  });

  fadeIn.start();

  return (
    <Animated.View style={{opacity: animation}}>
      {children}
    </Animated.View>
  );
};

export default FadeIn;
