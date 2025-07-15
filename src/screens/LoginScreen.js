import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { COLORS } from '../styles/colors';

export default function LoginScreen() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: COLORS.appBackgroundColor,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 12,
    textAlign: 'center',
  }
});
