import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function CustomSafeAreaProvider({ children }) {

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={ "light-content"} />

      <SafeAreaView style={styles.safeView} >

        <View style={[styles.safeView]}>{children}</View>

      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles =  StyleSheet.create({
    safeView: {
      flex: 1,
    }
})
