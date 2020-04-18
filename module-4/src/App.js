/**
 * @flow
 */

import 'react-native-gesture-handler';
import * as React from 'react';
import {StatusBar, Platform, NativeModules} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import AppRouter from './router/AppRouter';

import {PLATFORM} from './config';

// Enabling automatically the debug mode on running iOS in physical devices as development mode
if (__DEV__ && Platform.OS === PLATFORM.IOS) {
  NativeModules.DevSettings.setIsDebuggingRemotely(true);
}

const App = () => {
  return (
    <React.Fragment>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <AppRouter />
      </NavigationContainer>
    </React.Fragment>
  );
};

export default App;
