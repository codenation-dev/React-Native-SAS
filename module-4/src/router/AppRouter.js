/**
 * @flow
 */

import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import OnboardingRouter from './routers/OnboardingRouter';

import {ONBOARDING} from './routes';

const AppStack = createStackNavigator();

const options = {
  header: () => null,
};

const AppRouter = () => {
  return (
    <AppStack.Navigator initialRouteName={ONBOARDING} screenOptions={options}>
      <AppStack.Screen name={ONBOARDING} component={OnboardingRouter} />
    </AppStack.Navigator>
  );
};

export default AppRouter;
