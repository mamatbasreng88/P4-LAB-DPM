import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ControlButtons = ({ onIncrease, onDecrease, onReset }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onIncrease}>
        <Ionicons name="add-circle" size={32} color="#6A11CB" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onDecrease}>
        <Ionicons name="remove-circle" size={32} color="#6A11CB" />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.reset]} onPress={onReset}>
        <Text style={styles.resetText}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  button: {
    padding: 10,
    alignItems: 'center',
  },
  reset: {
    backgroundColor: '#6A11CB',
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  resetText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ControlButtons;
