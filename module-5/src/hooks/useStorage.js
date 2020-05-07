/**
 * @flow
 */

import {useState, useEffect} from 'react';
import {useAsyncStorage} from '@react-native-community/async-storage';

export const useStorage = (key, initialValue) => {
  const [storage, setStorage] = useState(initialValue || null);

  const {getItem, setItem} = useAsyncStorage(key);

  useEffect(() => {
    getItem().then(value =>
      value
        ? setStorage(JSON.parse(value))
        : initialValue && updateStorage(initialValue),
    );
  }, []);

  const updateStorage = value =>
    setItem(JSON.stringify(value)).then(() => setStorage(value));

  return [storage, updateStorage];
};
