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

export const StatusContext = React.createContext()

const App = () => {
  const [isEnabled, setIsEnabled] = React.useState([]);  
  const [block, setBlock] = React.useState(false);
  const [isLookingSteps, setAsLookingSteps] = React.useState(false);

  const startLookingToSteps = () => setAsLookingSteps(true);

  React.useEffect(() => {
    if(block === true) setAsLookingSteps(false);
  })

  return (
    <React.Fragment>
      <StatusContext.Provider value={{isEnabled, setIsEnabled, block, setBlock}}>
        <StatusBar barStyle="light-content" />
          <SafeAreaView style={styles.safeArea}>
            {isLookingSteps ? (
              <LookSteps/>
            ) : (
              <Home onStart={startLookingToSteps} />
            )}
          </SafeAreaView>
      </StatusContext.Provider>
    </React.Fragment>
  );
};

const styles = {
  safeArea: {
    flex: 1,
  },
};

export default App;
