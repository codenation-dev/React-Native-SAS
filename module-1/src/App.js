/**
 * @flow
 */

import * as React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  StatusBar,
  NativeModules,
  Platform,
} from 'react-native';

import {Header} from 'react-native/Libraries/NewAppScreen';

import {useRecipes} from './useRecipes';

import Recipes from './Recipes';

import {PLATFORM} from './config';

// Enabling automatically the debug mode on running iOS in physical devices as development mode
if (__DEV__ && Platform.OS === PLATFORM.IOS) {
  NativeModules.DevSettings.setIsDebuggingRemotely(true);
}

const App = () => {
  const [recipes] = useRecipes();

  return (
    <React.Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          testID="app"
          contentInsetAdjustmentBehavior="automatic"
          style={{backgroundColor: '#F3F3F3'}}>
          <Header />
          <View testID="content" style={{backgroundColor: '#FFF'}}>
            <Recipes recipes={recipes} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </React.Fragment>
  );
};

export default App;
