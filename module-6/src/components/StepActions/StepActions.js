/**
 * @flow
 */

import * as React from 'react';
import {View} from 'react-native';

import {colors} from '../../styles';
import {dimensions} from '../../config';

const StepActions = ({children}) => {
  return <View style={styles.stepActions}>{children}</View>;
};

const styles = {
  stepActions: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: dimensions.width,
    height: 90,
    backgroundColor: colors.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
};

export default StepActions;
