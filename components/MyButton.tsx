import React from 'react';
import { View, Button, StyleSheet, Alert } from 'react-native';

export default function MyButton() {
  return (
    <View style={styles.buttonContainer}>
      <Button
        title="Press me"
        onPress={() => Alert.alert('Button pressed!')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 16,
  },
});
