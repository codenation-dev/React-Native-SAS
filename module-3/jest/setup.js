import {NativeModules} from 'react-native';

global.fetch = jest.fn();

NativeModules.DevSettings = {
  setIsDebuggingRemotely: jest.fn(),
};
