import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ScoreCard = ({ teamName, score }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.teamName}>{teamName}</Text>
      <Text style={styles.score}>{score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    alignItems: 'center',
  },
  teamName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  score: {
    fontSize: 36,
    color: '#6A11CB',
    fontWeight: 'bold',
  },
});

export default ScoreCard;
