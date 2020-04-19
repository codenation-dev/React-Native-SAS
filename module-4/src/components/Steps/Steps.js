/**
 * @flow
 */

import * as React from 'react';
import {View, ScrollView, Dimensions, Text} from 'react-native';

import ForwardStep from '../ForwardStep/ForwardStep';

import {colors} from '../../styles';

const Steps = ({children, onForward, onBackward, lastStep}) => {
  console.log(lastStep);
  return (
    <View style={styles.content}>
      {children.key > 1 && (
        <View style={{backgroundColor: colors.primary}}>
          <ForwardStep onForward={() => onBackward()}>
            PASSO ANTERIOR
          </ForwardStep>
        </View>
      )}

      <ScrollView
        style={styles.steps}
        contentInsetAdjustmentBehavior="automatic">
        {children}
      </ScrollView>
      <View style={styles.stepActions}>
        <ForwardStep onForward={() => onForward()}>
          {children.key == lastStep ? 'VOLTAR AO INICIO' : 'PROXIMO PASSO'}
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
