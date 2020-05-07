/**
 * @flow
 */

import {Dimensions} from 'react-native';

console.disableYellowBox = true;
console.reportErrorsAsExceptions = false;

export const PLATFORM = {
  IOS: 'ios',
  ANDROID: 'android',
};

export const dimensions = Dimensions.get('window');
