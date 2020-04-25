/**
 * @flow
 */

import * as React from 'react';
import AnimatedLottieView from 'lottie-react-native';

import spinner from '../../assets/animations/spinner.json';

const Spinner = () => {
  return <AnimatedLottieView source={spinner} autoPlay={true} loop={true} />;
};

export default Spinner;
