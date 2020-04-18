/**
 * @flow
 */

import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Welcome from '../../screens/Welcome/Welcome';
import LookSteps from '../../screens/LookSteps/LookSteps';
import Congratulations from '../../screens/Congratulations/Congratulations';
import {
  ONBOARDING_HOME,
  ONBOARDING_LOOK_STEPS,
  CONGRATULATIONS,
} from '../routes';

const OnboardingStack = createStackNavigator();

const options = {
  header: () => null,
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
      <OnboardingStack.Screen
        name={CONGRATULATIONS}
        component={Congratulations}
      />
    </OnboardingStack.Navigator>
  );
};

export default OnboardingRouter;
