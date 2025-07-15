import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default function HomeScreen() {
  

  return (
      <View style={styles.container}>
        <Text style={styles.title}>Design Your Trip</Text>

      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 16,
  }
});
