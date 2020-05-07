/**
 * @flow
 */

import {useState, useEffect} from 'react';

const PERMITTED_DISTANCE = 500; // km

// retorna em km qual a distância entre dois pontos de coordenadas
const getDistance = (
  {latitude: lat1, longitude: lon1},
  {latitude: lat2, longitude: lon2},
) => {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  return R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
};

// verifica se a distância entre a disponibilidade de um passo para ser mostrado está correta
// baseada na distância permitida
const isStepDistanceRight = location => step =>
  getDistance(location, step.availability.location) <= PERMITTED_DISTANCE;

const defaultParams = {
  location: {},
};

export const useOnboardingSteps = (stepId, {location} = defaultParams) => {
  const [steps, setSteps] = useState([]);
  const [currentStep, setStepAsCurrent] = useState(null);

  const isLastStep = steps.indexOf(currentStep) === steps.length - 1;
  const isFirstStep = steps.indexOf(currentStep) === 0;

  const nextStep = !isLastStep ? steps[steps.indexOf(currentStep) + 1] : null;

  useEffect(() => {
    setSteps(require('../../../data/steps.json'));
  }, []);

  useEffect(() => {
    if (!stepId || stepId !== (currentStep || {}).id) {
      setStepAsCurrent(findStepById(stepId));
    }
  }, [steps, stepId]);

  useEffect(() => {
    if (steps.length > 0 && location.latitude && location.longitude) {
      setSteps(steps.filter(isStepDistanceRight(location)));
    }
  }, [location]);

  const findStepById = id =>
    id ? steps.find(step => step.id === id) : steps[0];

  return {
    steps,
    currentStep,
    nextStep,
    isLastStep,
    isFirstStep,
    findStepById,
  };
};
