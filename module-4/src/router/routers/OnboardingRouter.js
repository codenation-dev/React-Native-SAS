/**
 * @flow
 */

import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Welcome from '../../screens/Welcome/Welcome';
import ended from '../../screens/Ended/Ended';
import LookSteps from '../../screens/LookSteps/LookSteps';
import FirstSteps from '../../screens/Steps/FirstStep';
import SecondSteps from '../../screens/Steps/SecondStep';
import ThirdSteps from '../../screens/Steps/ThirdStep';
import FourSteps from '../../screens/Steps/FourStep';

import {
  ONBOARDING_HOME,
  ONBOARDING_LOOK_STEPS,
  ONBOARDING_ENDED,
  ONBOARDING_FIRST_STEP,
  ONBOARDING_SECOND_STEP,
  ONBOARDING_THIRD_STEP,
  ONBOARDING_FOUR_STEP,
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
      <OnboardingStack.Screen name={ONBOARDING_ENDED} component={ended} />
      <OnboardingStack.Screen
        name={ONBOARDING_LOOK_STEPS}
        component={LookSteps}
      />
      <OnboardingStack.Screen
        name={ONBOARDING_FIRST_STEP}
        component={FirstSteps}
      />
      <OnboardingStack.Screen
        name={ONBOARDING_SECOND_STEP}
        component={SecondSteps}
      />
      <OnboardingStack.Screen
        name={ONBOARDING_THIRD_STEP}
        component={ThirdSteps}
      />
      <OnboardingStack.Screen
        name={ONBOARDING_FOUR_STEP}
        component={FourSteps}
      />
    </OnboardingStack.Navigator>
  );
};

export default OnboardingRouter;
