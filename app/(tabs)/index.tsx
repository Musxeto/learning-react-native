import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MyButton from "../../components/MyButton";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My First React Native App</Text>
      <Text style={styles.subtitle}>Hello, world!</Text>
      <MyButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    marginTop: 40,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 16,
    textAlign: "center",
  }
});
