import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Calculator = () => {
  const [display, setDisplay] = useState('');
  const [result, setResult] = useState('');

  const handlePress = (value) => {
    if (value === '=') {
      try {
        setResult(eval(display));
      } catch (e) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setDisplay('');
      setResult('');
    } else {
      setDisplay(display + value);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.displayText}>{display}</Text>
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        {['7', '8', '9', '/'].map((value) => (
          <TouchableOpacity
            key={value}
            onPress={() => handlePress(value)}
            style={styles.button}
          >
            <Text style={styles.buttonText}>{value}</Text>
          </TouchableOpacity>
        ))}
        {['4', '5', '6', '*'].map((value) => (
          <TouchableOpacity
            key={value}
            onPress={() => handlePress(value)}
            style={styles.button}
          >
            <Text style={styles.buttonText}>{value}</Text>
          </TouchableOpacity>
        ))}
        {['1', '2', '3', '-'].map((value) => (
          <TouchableOpacity
            key={value}
            onPress={() => handlePress(value)}
            style={styles.button}
          >
            <Text style={styles.buttonText}>{value}</Text>
          </TouchableOpacity>
        ))}
        {['C', '0', '=', '+'].map((value) => (
          <TouchableOpacity
            key={value}
            onPress={() => handlePress(value)}
            style={styles.button}
          >
            <Text style={styles.buttonText}>{value}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  displayContainer: {
    width: '90%',
    backgroundColor: '#222',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  displayText: {
    color: '#fff',
    fontSize: 32,
  },
  resultText: {
    color: '#7f8c8d',
    fontSize: 24,
    textAlign: 'right',
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    width: '20%',
    margin: 5,
    padding: 20,
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
  },
});

export default Calculator;
