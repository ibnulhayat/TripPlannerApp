import React from 'react';
import { Provider } from 'react-redux';
import { persistor, store } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

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