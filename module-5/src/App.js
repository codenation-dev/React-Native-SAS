/**
 * @flow
 */

import 'react-native-gesture-handler';
import * as React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import AppRouter from './router/AppRouter';

import {useGeolocation} from './hooks/useGeolocation';

const App = () => {
  const [isReady, setAsReady] = React.useState(false);
  const [, {requestPermission}] = useGeolocation();

  React.useEffect(() => {
    requestPermission()
      .then(() => setAsReady(true))
      .catch(() => setAsReady(true));
  }, []);

  if (!isReady) {
    return null;
  }

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
