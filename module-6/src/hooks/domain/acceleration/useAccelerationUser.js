import {useState, useEffect} from 'react';

export const useAccelerationUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(require('../../../data/user.json'));
  }, []);

  return user;
};
