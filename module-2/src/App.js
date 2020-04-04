/**
 * @flow
 */

import * as React from 'react';
import {SafeAreaView, StatusBar, Platform, NativeModules} from 'react-native';

import LookSteps from './components/LookSteps/LookSteps';
import Home from './components/Home/Home';

import {PLATFORM} from './config';

// Enabling automatically the debug mode on running iOS in physical devices as development mode
if (__DEV__ && Platform.OS === PLATFORM.IOS) {
  NativeModules.DevSettings.setIsDebuggingRemotely(true);
}

const App = () => {
  const [isLookingSteps, setAsLookingSteps] = React.useState(false);
  const [isStepsFinished, setStepsAsFinished] = React.useState(false);

  const startLookingToSteps = () => !isStepsFinished && setAsLookingSteps(true);

  const finishLookingToSteps = () => {
    setStepsAsFinished(true);
    setAsLookingSteps(false);
  };

  return (
    <React.Fragment>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeArea}>
        {!isLookingSteps && (
          <Home onStart={startLookingToSteps} isFinished={isStepsFinished} />
        )}
        {isLookingSteps && !isStepsFinished && (
          <LookSteps onFinish={finishLookingToSteps} />
        )}
      </SafeAreaView>
    </React.Fragment>
  );
};

const styles = {
  safeArea: {
    flex: 1,
  },
};

export default App;
