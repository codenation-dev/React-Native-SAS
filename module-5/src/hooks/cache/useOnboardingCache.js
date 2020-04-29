/**
 * @flow
 */

import {useCache} from '../useCache';

import {ONBOARDING_IS_FINISHED_CACHE} from '../../cache';

export const useOnboardingCache = () => {
  const [
    isOnboardingFinishedInCache,
    updateOnboardingAsFinishedInCache,
  ] = useCache(ONBOARDING_IS_FINISHED_CACHE, false);

  const finishOnboardingInCache = () => updateOnboardingAsFinishedInCache(true);

  return {
    isFinished: [isOnboardingFinishedInCache, finishOnboardingInCache],
  };
};
