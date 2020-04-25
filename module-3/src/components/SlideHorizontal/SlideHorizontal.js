/**
 * @flow
 */

import * as React from 'react';
import {Animated, Dimensions} from 'react-native';

const dimensions = Dimensions.get('window');

export const ANIMATION_DURATION = 1000;

const SlideHorizontal = ({children, isActive}) => {
  const animation = React.useRef(new Animated.Value(dimensions.width)).current;

  const slideIn = Animated.timing(animation, {
    toValue: 0,
    duration: ANIMATION_DURATION,
  });

  const slideOut = Animated.timing(animation, {
    toValue: -dimensions.width,
    duration: ANIMATION_DURATION,
  });

  React.useEffect(() => {
    slideIn.start();
  }, []);

  React.useEffect(() => {
    if (isActive) {
      slideOut.start(({finished}) => {
        if (finished) {
          slideOut.reset();
          slideIn.start();
        }
      });
    }
  }, [isActive, slideIn, slideOut]);

  return (
    <Animated.View style={{translateX: animation}}>{children}</Animated.View>
  );
};

SlideHorizontal.defaultProps = {
  isActive: true,
};

export default SlideHorizontal;
