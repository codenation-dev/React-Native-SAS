/**
 * @flow
 */

import AsyncStorage from '@react-native-community/async-storage';

export {ONBOARDING_STORAGE, onboarding} from './onboarding';

import {onboarding, ONBOARDING_STORAGE} from './onboarding';

export const storage = {
  [ONBOARDING_STORAGE]: onboarding,
};

export const initialize = () => {
  AsyncStorage.multiGet([ONBOARDING_STORAGE])
    .then(data => data.filter(([, value]) => !value))
    .then(data =>
      AsyncStorage.multiSet(
        data.map(([key]) => [key, JSON.stringify(storage[key])]),
      ),
    )
    .catch(error => console.error(error));
};
