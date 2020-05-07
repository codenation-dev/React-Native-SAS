/**
 * @flow
 */

import {useStorage} from '../useStorage';

import {ONBOARDING_STORAGE, onboarding} from '../../storage/onboarding';

export const useOnboardingStorage = () => {
  const [
    {steps, ...onboardingInStorage},
    updateOnboardingInStorage,
  ] = useStorage(ONBOARDING_STORAGE, onboarding);

  const stepsInstructionsCompletedInStorage = steps.instructionsCompleted;

  const completeStepInstructionInStorage = instructionId =>
    updateOnboardingInStorage({
      ...onboardingInStorage,
      steps: {
        ...steps,
        instructionsCompleted: [
          ...stepsInstructionsCompletedInStorage,
          instructionId,
        ],
      },
    });

  return {
    stepsInstructionsCompleted: [
      stepsInstructionsCompletedInStorage,
      completeStepInstructionInStorage,
    ],
  };
};
