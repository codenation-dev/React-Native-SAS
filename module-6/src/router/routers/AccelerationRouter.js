/**
 * @flow
 */

import * as React from 'react';

import {useNavigationState} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../../screens/Home/Home';
import ProfileScanner from '../../screens/ProfileScanner/ProfileScanner';

import {
  ONBOARDING,
  ACCELERATION,
  ACCELERATION_HOME,
  ACCELERATION_PROFILE_SCANNER,
} from '../routes';

const AccelerationStack = createStackNavigator();

const options = {
  headerShown: false,
};

const AccelerationRouter = ({navigation}) => {
  const {index, routes} = useNavigationState(state => state);
  const isFromOnboarding =
    index > 0 ? routes[index - 1].name === ONBOARDING : false;

  React.useEffect(() => {
    if (isFromOnboarding) {
      navigation.reset({
        index: 0,
        routes: [{name: ACCELERATION}],
      });
    }
  }, [isFromOnboarding]);

  if (isFromOnboarding) {
    return null;
  }

  return (
    <AccelerationStack.Navigator
      initialRouteName={ACCELERATION_HOME}
      screenOptions={options}>
      <AccelerationStack.Screen name={ACCELERATION_HOME} component={Home} />
      <AccelerationStack.Screen
        name={ACCELERATION_PROFILE_SCANNER}
        component={ProfileScanner}
      />
    </AccelerationStack.Navigator>
  );
};

export default AccelerationRouter;
