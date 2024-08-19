import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Calculator from './components/Calculator';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Calculator />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});

export default App;
