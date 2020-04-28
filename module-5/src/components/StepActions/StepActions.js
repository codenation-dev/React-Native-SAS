/**
 * @flow
 */

import * as React from 'react';
import {Dimensions, View} from 'react-native';

import {colors} from '../../styles';

const StepActions = ({children}) => {
  return <View style={styles.stepActions}>{children}</View>;
};

const styles = {
  stepActions: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: Dimensions.get('window').width,
    height: 90,
    backgroundColor: colors.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
};

export default StepActions;
