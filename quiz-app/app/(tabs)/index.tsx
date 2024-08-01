import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import HomeScreen from './HomeScreen';
import QuizScreen from './QuizScreen';

export default function App() {
  const [screen, setScreen] = useState('home');
  const [numQuestions, setNumQuestions] = useState(10);
  const [theme, setTheme] = useState('WWE');

  const handleStartQuiz = (num, theme) => {
    setNumQuestions(num);
    setTheme(theme);
    setScreen('quiz');
  };

  const handleFinishQuiz = (score, numQuestions) => {
    setScreen('score');
  };

  const handleBackToHome = () => {
    setScreen('home');
  };

  return (
    <View style={styles.container}>
      {screen === 'home' && (
        <HomeScreen onStartQuiz={handleStartQuiz} />
      )}
      {screen === 'quiz' && (
        <QuizScreen
          numQuestions={numQuestions}
          theme={theme}
          onFinishQuiz={handleFinishQuiz}
        />
      )}
      {screen === 'score' && (
        <View style={styles.container}>
          <Text style={styles.title}>Quiz Finished!</Text>
          <Button title="Back to Home" onPress={handleBackToHome} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1c1c1c',
  },
  title: {
    fontSize: 28,
    color: '#fff',
    marginBottom: 20,
    fontWeight: 'bold',
  },
});
