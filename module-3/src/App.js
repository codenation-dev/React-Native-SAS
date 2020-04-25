/**
 * @flow
 */

import * as React from 'react';
import {StatusBar, Platform, NativeModules} from 'react-native';
import styled, {ThemeProvider} from 'styled-components';

import LookSteps from './components/LookSteps/LookSteps';
import Home from './components/Home/Home';
import Loading from './components/Loading/Loading';

import {main as theme} from './theme';

import {PLATFORM} from './config';

// Enabling automatically the debug mode on running iOS in physical devices as development mode
if (__DEV__ && Platform.OS === PLATFORM.IOS) {
  NativeModules.DevSettings.setIsDebuggingRemotely(true);
}

const SafeArea = styled.SafeAreaView`
  flex: 1;
`;

const App = () => {
  const [isLookingSteps, setAsLookingSteps] = React.useState(false);
  const [isStepsFinished, setStepsAsFinished] = React.useState(false);
  const [isLoadingSteps, setStepsAsLoading] = React.useState(false);

  const startLookingToSteps = () => {
    if (isStepsFinished) {
      return;
    }

    setStepsAsLoading(true);

    setTimeout(() => {
      setStepsAsLoading(false);
      setAsLookingSteps(true);
    }, 2000);
  };

  const finishLookingToSteps = () => {
    setStepsAsFinished(true);
    setAsLookingSteps(false);
  };

  return (
    <React.Fragment>
      <StatusBar barStyle="light-content" />
      <SafeArea>
        <ThemeProvider theme={theme}>
          {!isLookingSteps && (
            <Home onStart={startLookingToSteps} isFinished={isStepsFinished} />
          )}
          {isLookingSteps && !isStepsFinished && (
            <LookSteps onFinish={finishLookingToSteps} />
          )}
          <Loading isLoading={isLoadingSteps} />
        </ThemeProvider>
      </SafeArea>
    </React.Fragment>
  );
};

export default App;
