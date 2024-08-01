import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const quizData = [
  { question: "Who won the 2016 Royal Rumble Match?", options: ['Seth Rollins', 'Roman Reigns', 'Randy Orton', 'AJ Styles'], answer: "Roman Reigns" },
  { question: "Who is known as 'The Viper'?", options: ['Randy Orton', 'Edge', 'John Cena', 'Triple H'], answer: "Randy Orton" },
  { question: "What is the nickname of The Rock?", options: ['The Brahma Bull', 'The Peoples Champ', 'The Great One', 'All of the Above'], answer: "All of the Above" },
  { question: "Which WWE wrestler is known for the 'Attitude Adjustment' move?", options: ['John Cena', 'Brock Lesnar', 'AJ Styles', 'Seth Rollins'], answer: "John Cena" },
  { question: "Who won the first-ever Money in the Bank Ladder Match?", options: ['Edge', 'CM Punk', 'Daniel Bryan', 'Kofi Kingston'], answer: "Edge" },
  { question: "Which WWE superstar is known for the 'RKO' finisher?", options: ['Randy Orton', 'Shawn Michaels', 'Chris Jericho', 'Kurt Angle'], answer: "Randy Orton" },
  { question: "Who was the longest-reigning WWE Champion of the 21st century?", options: ['Bruno Sammartino', 'Hulk Hogan', 'Brock Lesnar', 'CM Punk'], answer: "CM Punk" },
  { question: "Which WWE superstar is known for the 'Flying Elbow Drop'?", options: ['Ricky Steamboat', 'Macho Man Randy Savage', 'Ric Flair', 'Dusty Rhodes'], answer: "Macho Man Randy Savage" },
  { question: "Who did The Undertaker defeat in his debut WrestleMania match?", options: ['Kane', 'Ric Flair', 'Jimmy Snuka', 'Hulk Hogan'], answer: "Jimmy Snuka" },
  { question: "Which WWE superstar was known for the 'Yes! Movement'?", options: ['Daniel Bryan', 'AJ Styles', 'Roman Reigns', 'Seth Rollins'], answer: "Daniel Bryan" },
  { question: "Who did Stone Cold Steve Austin defeat to win his first WWE Championship?", options: ['Vince McMahon', 'Triple H', 'Shawn Michaels', 'Kurt Angle'], answer: "Jake Roberts" },
  { question: "Which WWE diva is known as 'The Boss'?", options: ['Sasha Banks', 'Becky Lynch', 'Charlotte Flair', 'Bayley'], answer: "Sasha Banks" },
  { question: "Who was the first-ever WWE Universal Champion?", options: ['Roman Reigns', 'Brock Lesnar', 'Seth Rollins', 'Finn Bálor'], answer: "Finn Bálor" },
  { question: "Which WWE wrestler was known for the 'GTS' (Go To Sleep) finisher?", options: ['CM Punk', 'Kofi Kingston', 'Randy Orton', 'Daniel Bryan'], answer: "CM Punk" },
  { question: "Who is known for the 'Macho Man' persona?", options: ['Macho Man Randy Savage', 'Ric Flair', 'Hulk Hogan', 'Ultimate Warrior'], answer: "Macho Man Randy Savage" },
  { question: "Which WWE superstar is famous for the '619' move?", options: ['Rey Mysterio', 'Eddie Guerrero', 'Edge', 'Chris Jericho'], answer: "Rey Mysterio" },
  { question: "Who was the first-ever female WWE Champion?", options: ['Sasha Banks', 'Trish Stratus', 'Lita', 'Wendi Richter'], answer: "Wendi Richter" },
  { question: "Which wrestler is known for the 'Stone Cold Stunner'?", options: ['Stone Cold Steve Austin', 'The Rock', 'Kevin Owens', 'Shawn Michaels'], answer: "Stone Cold Steve Austin" },
  { question: "Who did John Cena defeat to win his first WWE Championship?", options: ['JBL', 'Edge', 'Kurt Angle', 'Chris Jericho'], answer: "JBL" },
  { question: "Which wrestler is known for the 'Sharpshooter' submission hold?", options: ['Bret Hart', 'Ric Flair', 'Shawn Michaels', 'The Undertaker'], answer: "Bret Hart" },
  { question: "Who won the WWE Championship at WrestleMania 30?", options: ['Brock Lesnar', 'Daniel Bryan', 'Randy Orton', 'John Cena'], answer: "Daniel Bryan" },
  { question: "Which wrestler is known for the 'Leg Drop'?", options: ['Hulk Hogan', 'The Rock', 'Randy Savage', 'Stone Cold Steve Austin'], answer: "Hulk Hogan" },
  { question: "Who won the first-ever Royal Rumble match?", options: ['Hulk Hogan', 'Ric Flair', 'Stone Cold Steve Austin', 'Macho Man Randy Savage'], answer: "Ric Flair" },
  { question: "Which WWE superstar is known for the 'RKO' finisher?", options: ['Randy Orton', 'Triple H', 'Brock Lesnar', 'Kurt Angle'], answer: "Randy Orton" },
  { question: "Who was known as 'The Heartbreak Kid'?", options: ['Shawn Michaels', 'Chris Jericho', 'Bret Hart', 'Ricky Steamboat'], answer: "Shawn Michaels" },
  { question: "Which WWE superstar has the nickname 'The Phenomenal One'?", options: ['AJ Styles', 'Seth Rollins', 'Roman Reigns', 'Dean Ambrose'], answer: "AJ Styles" },
  { question: "Who was the first-ever NXT Champion?", options: ['Seth Rollins', 'Big E', 'Adrian Neville', 'Kevin Owens'], answer: "Seth Rollins" },
  { question: "Which wrestler is known for the 'DDT' move?", options: ['Jake Roberts', 'Randy Orton', 'Ric Flair', 'Stone Cold Steve Austin'], answer: "Jake Roberts" },
  { question: "Who won the WWE Championship at WrestleMania 31?", options: ['Roman Reigns', 'Brock Lesnar', 'Seth Rollins', 'John Cena'], answer: "Seth Rollins" },
  { question: "Which WWE diva is known for her finishing move, the 'Bayley-to-Belly'?", options: ['Bayley', 'Sasha Banks', 'Charlotte Flair', 'Becky Lynch'], answer: "Bayley" },
  { question: "Who was known as 'The Nature Boy'?", options: ['Ric Flair', 'Dusty Rhodes', 'Hulk Hogan', 'Ted DiBiase'], answer: "Ric Flair" },
  { question: "Which WWE superstar was known for the 'Flying Forearm'?", options: ['Macho Man Randy Savage', 'Jimmy Snuka', 'Hulk Hogan', 'Ric Flair'], answer: "Jimmy Snuka" },
  { question: "Who did The Rock defeat to win his first WWE Championship?", options: ['Hulk Hogan', 'Stone Cold Steve Austin', 'Mankind', 'Kurt Angle'], answer: "Mankind" },
  { question: "Which WWE wrestler is known for the 'Superkick'?", options: ['Shawn Michaels', 'Randy Orton', 'Triple H', 'Bret Hart'], answer: "Shawn Michaels" },
  { question: "Who was the first WWE wrestler to win the Money in the Bank briefcase?", options: ['Edge', 'CM Punk', 'Kofi Kingston', 'Daniel Bryan'], answer: "Edge" },
  { question: "Which wrestler is known for the 'Powerbomb' move?", options: ['Kevin Nash', 'Diesel', 'Goldberg', 'Brock Lesnar'], answer: "Kevin Nash" },
  { question: "Who won the WWE Championship at WrestleMania 33?", options: ['John Cena', 'Bray Wyatt', 'Randy Orton', 'Goldberg'], answer: "Bray Wyatt" },
  { question: "Which WWE diva is known for her finishing move, the 'Disarmher'?", options: ['Becky Lynch', 'Charlotte Flair', 'Sasha Banks', 'Bayley'], answer: "Becky Lynch" },
  { question: "Who is known for the 'Curb Stomp' finishing move?", options: ['Seth Rollins', 'Dean Ambrose', 'Roman Reigns', 'AJ Styles'], answer: "Seth Rollins" },
  { question: "Who did Brock Lesnar defeat to win his first WWE Championship?", options: ['John Cena', 'Hulk Hogan', 'Randy Orton', 'Kurt Angle'], answer: "Kurt Angle" },
  { question: "Which WWE superstar is known for the 'Dropkick'?", options: ['Ric Flair', 'Shawn Michaels', 'Ricky Steamboat', 'Macho Man Randy Savage'], answer: "Ricky Steamboat" },
  { question: "Who is known for the 'K.O.' finishing move?", options: ['Kevin Owens', 'Sami Zayn', 'Chris Jericho', 'AJ Styles'], answer: "Kevin Owens" },
  { question: "Which wrestler is known for the 'Stone Cold Stunner'?", options: ['Stone Cold Steve Austin', 'Kevin Owens', 'Chris Jericho', 'Shawn Michaels'], answer: "Stone Cold Steve Austin" },
  { question: "Who won the WWE Women's Championship at WrestleMania 35?", options: ['Becky Lynch', 'Charlotte Flair', 'Ronda Rousey', 'Sasha Banks'], answer: "Becky Lynch" },
];

export default function QuizScreen({ numQuestions, theme, onFinishQuiz }) {
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [progress, setProgress] = useState(0);
    const [timer, setTimer] = useState(10);

    useEffect(() => {
      const shuffledData = [...quizData].sort(() => Math.random() - 0.5).slice(0, numQuestions);
      setQuestions(shuffledData);
      setCurrentQuestion(0);
      setScore(0);
      setShowScore(false);
      setProgress(0);
      setTimer(10);
    }, [numQuestions]);

    useEffect(() => {
      if (showScore && timer > 0) {
        const timerId = setInterval(() => {
          setTimer(prevTimer => {
            if (prevTimer <= 1) {
              clearInterval(timerId);
              onFinishQuiz(score, numQuestions);
              return 0;
            }
            return prevTimer - 1;
          });
        }, 1000);

        return () => clearInterval(timerId);
      }
    }, [showScore, timer]);

    const handleAnswer = (selectedAnswer) => {
      const correctAnswer = questions[currentQuestion]?.answer;
      if (selectedAnswer === correctAnswer) {
        setScore(prevScore => prevScore + 1);
      }

      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < numQuestions) {
        setCurrentQuestion(nextQuestion);
        setProgress(((nextQuestion + 1) / numQuestions) * 100);
      } else {
        setShowScore(true);
      }
    };

    return (
      <View style={[styles.container, { backgroundColor: theme === 'Raw' ? '#d82e2d' : '#003c71' }]}>
        {showScore ? (
          <View style={styles.scoreContainer}>
            <Text style={styles.score}>Final Score: {score} / {numQuestions}</Text>
            <Text style={styles.timer}>Returning to Home in {timer} seconds...</Text>
          </View>
        ) : (
          <View style={styles.questionContainer}>
            <Text style={styles.questionText}>{questions[currentQuestion]?.question}</Text>
            {questions[currentQuestion]?.options.map((option, index) => (
              <TouchableOpacity
                onPress={() => handleAnswer(option)}
                key={index}
                style={styles.optionButton}
              >
                <Text style={styles.optionText}>{option}</Text>
              </TouchableOpacity>
            ))}
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: `${progress}%` }]} />
            </View>
          </View>
        )}
      </View>
    );
}
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    questionContainer: {
      width: '100%',
      alignItems: 'center',
    },
    questionText: {
      fontSize: 20,
      color: '#fff',
      marginBottom: 20,
    },
    optionButton: {
      marginBottom: 10,
      padding: 15,
      backgroundColor: '#555', // Slightly lighter for better contrast
      borderRadius: 10, // More rounded corners
      width: '80%', // Ensure buttons are the same width
      alignItems: 'center',
      elevation: 5, // Add shadow for Android
      shadowOffset: { width: 0, height: 4 }, // Add shadow for iOS
      shadowOpacity: 0.3,
      shadowRadius: 4,
    },
    optionText: {
      fontSize: 18,
      color: '#fff',
    },
    scoreContainer: {
      alignItems: 'center',
    },
    score: {
      fontSize: 24,
      color: '#fff',
      textAlign: 'center',
      marginBottom: 20,
    },
    timer: {
      fontSize: 18,
      color: '#fff',
    },
    progressBar: {
      marginTop: 20,
      height: 10,
      width: '100%',
      backgroundColor: '#777',
      borderRadius: 5,
      overflow: 'hidden',
    },
    progressFill: {
      height: '100%',
      backgroundColor: '#ff0000',
    },
  });