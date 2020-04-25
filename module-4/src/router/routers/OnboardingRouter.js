/**
 * @flow
 */

import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Welcome from '../../screens/Welcome/Welcome';
import LookSteps from '../../screens/LookSteps/LookSteps';

import {ONBOARDING_HOME, ONBOARDING_LOOK_STEPS} from '../routes';

const OnboardingStack = createStackNavigator();

const options = {
  headerShown: false,
};

const OnboardingRouter = () => {
  return (
    <OnboardingStack.Navigator
      initialRouteName={ONBOARDING_HOME}
      screenOptions={options}>
      <OnboardingStack.Screen name={ONBOARDING_HOME} component={Welcome} />
      <OnboardingStack.Screen
        name={ONBOARDING_LOOK_STEPS}
        component={LookSteps}
      />
    </OnboardingStack.Navigator>
  );
};

export default OnboardingRouter;
