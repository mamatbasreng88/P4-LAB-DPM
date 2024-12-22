import React, { useState } from 'react';
import { View, Alert, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header';
import ScoreCard from '../components/ScoreCard';
import ControlButtons from '../components/ControlButtons';

const MatchScreen = () => {
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);

  const handleIncrease = (team) => {
    if (team === 'A') {
      if (scoreA + 1 === 10) {
        Alert.alert('Team A Wins!');
      }
      setScoreA(scoreA + 1);
    } else {
      if (scoreB + 1 === 10) {
        Alert.alert('Team B Wins!');
      }
      setScoreB(scoreB + 1);
    }
  };

  const handleDecrease = (team) => {
    if (team === 'A' && scoreA > 0) {
      setScoreA(scoreA - 1);
    } else if (team === 'B' && scoreB > 0) {
      setScoreB(scoreB - 1);
    }
  };

  const handleReset = () => {
    setScoreA(0);
    setScoreB(0);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header />
      <ScoreCard teamName="Team A" score={scoreA} />
      <ControlButtons
        onIncrease={() => handleIncrease('A')}
        onDecrease={() => handleDecrease('A')}
        onReset={handleReset}
      />
      <ScoreCard teamName="Team B" score={scoreB} />
      <ControlButtons
        onIncrease={() => handleIncrease('B')}
        onDecrease={() => handleDecrease('B')}
        onReset={handleReset}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 10,
    backgroundColor: '#E8F5FF',
  },
});

export default MatchScreen;
