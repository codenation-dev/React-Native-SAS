/**
 * @flow
 */

import * as React from 'react';
import {View, ImageBackground} from 'react-native';

const Header = ({children}) => {
  return (
    <ImageBackground
      accessibilityRole={'image'}
      source={require('../../assets/codenation.jpg')}
      style={styles.header}
      imageStyle={styles.image}>
      {children && <View style={styles.content}>{children}</View>}
    </ImageBackground>
  );
};

const styles = {
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
    paddingVertical: 75,
    paddingHorizontal: 0,
  },
  image: {
    overflow: 'visible',
    resizeMode: 'cover',
    flex: 1,
  },
  content: {
    width: '75%',
    margin: 0,
    padding: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default Header;
