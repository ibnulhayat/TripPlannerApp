import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default function TripsScreen() {
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trip</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 16,
  }
});
