import React from 'react';
import { KeyboardAvoidingView, Platform, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';

export default function CustomSafeAreaProvider({ children }) {

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={{ flex: 1 }}
    >
      <StatusBar barStyle={ "light-content"} />

      <SafeAreaView style={styles.safeView} >

        <View style={[styles.innerContent]}>{children}</View>

      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles =  StyleSheet.create({
    safeView: {
      flex: 1,
    },
    innerContent: {
      flex: 1,
      overflow: 'visible',
    }
})
