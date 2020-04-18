/**
 * @flow
 */

import * as React from 'react';
import {View, ScrollView, Dimensions} from 'react-native';

import ForwardStep from '../ForwardStep/ForwardStep';

import {colors} from '../../styles';

const Steps = ({
  children,
  onForward,
  onBehind,
  currentStepId,
  lastStepId,
  onFinish,
}) => {
  function Foward() {
    if (currentStepId === lastStepId) {
      return onFinish();
    }
    return onForward();
  }

  function Behind() {
    onBehind();
  }
  return (
    <View style={styles.content}>
      <ScrollView
        style={styles.steps}
        contentInsetAdjustmentBehavior="automatic">
        {children}
      </ScrollView>
      <View style={styles.stepActions}>
        {Number(currentStepId) > 1 && (
          <ForwardStep onClick={Behind}>ANTERIOR</ForwardStep>
        )}

        <ForwardStep onClick={Foward}>
          {currentStepId === lastStepId ? 'VOLTAR AO INICIO' : 'PROXIMO PASSO'}
        </ForwardStep>
      </View>
    </View>
  );
};

const styles = {
  content: {
    flex: 1,
  },
  steps: {
    paddingTop: 25,
    marginBottom: 90,
  },
  stepActions: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: Dimensions.get('window').width,
    height: 90,
    backgroundColor: colors.primary,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
};

export default Steps;
