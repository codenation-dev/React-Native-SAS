/**
 * @flow
 */

import {useEffect, useState} from 'react';
import {useAsyncStorage} from '@react-native-community/async-storage';

export const useCache = (key, initialValue) => {
  const [cache, setCache] = useState(
    initialValue != null ? initialValue : null,
  );

  const {getItem, setItem} = useAsyncStorage(key);

  useEffect(() => {
    getItem().then(value =>
      value != null
        ? setCache(eval(value)) // eslint-disable-line
        : initialValue != null && updateCache(initialValue),
    );
  }, []);

  const updateCache = value =>
    setItem(`${typeof value === 'string' ? '"value"' : value}`).then(() =>
      setCache(value),
    );

  return [cache, updateCache];
};
