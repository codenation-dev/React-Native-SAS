/**
 * @flow
 */

import * as React from 'react';
import {View} from 'react-native';

const Content = ({children}) => {
  return (
    <View style={styles.body}>
      {children}
    </View>
  );
};

const styles = {
  body: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    textAlign: 'left',
    margin: 0,
    backgroundColor: '#FFF',
  },
};

export default Content;
