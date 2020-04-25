/**
 * @flow
 */

import 'react-native-gesture-handler';
import * as React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import AppRouter from './router/AppRouter';

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
