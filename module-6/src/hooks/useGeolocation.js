/**
 * @flow
 */

import {useState, useEffect} from 'react';
import {PermissionsAndroid, Platform} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

import {PLATFORM} from '../config';

const isAndroid = Platform.OS === PLATFORM.ANDROID;

const ERRORS = {
  PERMISSION_DENIED: 'PERMISSION_DENIED',
  POSITION_UNAVAILABLE: 'POSITION_UNAVAILABLE',
  TIMEOUT: 'TIMEOUT',
};

const ERRORS_CODE = {
  [ERRORS.PERMISSION_DENIED]: 1,
  [ERRORS.POSITION_UNAVAILABLE]: 2,
  [ERRORS.TIMEOUT]: 3,
};

const isDeniedError = callback => error =>
  error.code === ERRORS_CODE[ERRORS.PERMISSION_DENIED]
    ? callback && callback()
    : Promise.reject(error);

const takePermissionDeniedError = error =>
  Promise.reject({
    message: error || 'Permissão de localização negada',
    name: ERRORS.PERMISSION_DENIED,
    code: ERRORS_CODE[ERRORS.PERMISSION_DENIED],
  });

const requestAndroidPermission = async () =>
  PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    {
      title: 'AceleraDevModulo6',
      message: 'AceleraDevModulo6 precisa de acesso a sua localização',
      buttonNeutral: 'Perguntar depois',
      buttonNegative: 'Cancelar',
      buttonPositive: 'Permitir',
    },
  ).then(
    permission =>
      permission === PermissionsAndroid.RESULTS.DENIED &&
      takePermissionDeniedError(),
  );

const requestIosPermission = async () => {
  try {
    Geolocation.requestAuthorization();
  } catch (error) {
    console.error(error);
    return takePermissionDeniedError(error.message);
  }
};

const getLocationPosition = () =>
  new Promise((resolve, reject) =>
    Geolocation.getCurrentPosition(
      result => resolve(result.coords),
      error => console.error(error) || reject(error),
      {
        maximumAge: 0, // 1 dia em milisegundos
        forceRequestLocation: true,
      },
    ),
  );

const initialLocation = {
  latitude: 0,
  longitude: 0,
};

export const useGeolocation = () => {
  const [location, setLocation] = useState(initialLocation);
  const [isPermitted, setAsPermitted] = useState(true);

  useEffect(() => {
    if (isAndroid) {
      PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      )
        .then(isGranted => setAsPermitted(isGranted))
        .catch(() => setAsPermitted(false));
    }
  }, []);

  const requestPermission = async () => {
    const request = isAndroid ? requestAndroidPermission : requestIosPermission;
    return await request()
      .then(() => setAsPermitted(true))
      .catch(error => setAsPermitted(false) || Promise.reject(error));
  };

  const updateLocation = ({latitude, longitude}) =>
    setLocation({latitude, longitude});

  const getPosition = () =>
    getLocationPosition()
      .then(coordinates => updateLocation(coordinates))
      .catch(isDeniedError(() => setAsPermitted(false)));

  return [
    location,
    {
      isPermitted,
      getPosition,
      requestPermission,
    },
  ];
};
