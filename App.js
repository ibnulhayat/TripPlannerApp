import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import CustomSafeAreaProvider from './src/components/CustomSafeAreaProvider';
import AppNavigator from './src/navigation/AppNavigator';
import { persistor, store } from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate 
        persistor={persistor} 
        loading={
          <View style={styles.loadingView}>
            <ActivityIndicator size={'large'}/>
          </View>
        }
      >
        <CustomSafeAreaProvider>
          <AppNavigator />
        </CustomSafeAreaProvider>
      </PersistGate>
    </Provider>
  )
}
const styles = StyleSheet.create({
  loadingView:{
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  }
})