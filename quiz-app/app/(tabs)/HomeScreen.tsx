import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen({ onStartQuiz }) {
  const [numQuestions, setNumQuestions] = useState(10);
  const [theme, setTheme] = useState('WWE');

  const handleNumQuestionsChange = (num) => setNumQuestions(num);
  const handleThemeChange = (theme) => setTheme(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wrestling Imtehaan</Text>
      <Text style={styles.label}>Select Number of Questions:</Text>
      <View style={styles.buttonContainer}>
        {[5, 10, 15, 20].map(num => (
          <TouchableOpacity
            key={num}
            style={[styles.button, num === numQuestions && styles.selectedButton]}
            onPress={() => handleNumQuestionsChange(num)}
          >
            <Text style={styles.buttonText}>{num} Questions</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.label}>Select Theme:</Text>
      <View style={styles.buttonContainer}>
        {['Raw', 'SmackDown'].map(t => (
          <TouchableOpacity
            key={t}
            style={[styles.button, t === theme && styles.selectedButton]}
            onPress={() => handleThemeChange(t)}
          >
            <Text style={styles.buttonText}>{t}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity
        style={styles.playButton}
        onPress={() => onStartQuiz(numQuestions, theme)}
      >
        <Text style={styles.playButtonText}>Play</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1c',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    color: '#fff',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  label: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#444',
    padding: 10,
    borderRadius: 5,
    margin: 5,
    width: 120, // Consistent width
  },
  selectedButton: {
    backgroundColor: '#777',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  playButton: {
    backgroundColor: '#ff0000',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  playButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
