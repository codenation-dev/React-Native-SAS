import React from 'react';
import {View, Text} from 'react-native';
import Header from '../../components/Header/Header';

const Ended = () => {
  return (
    <>
      <Header />
      <View style={styles.container}>
        <Text style={styles.title}>Parabéns!</Text>
      </View>
    </>
  );
};

export default Ended;

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
};
