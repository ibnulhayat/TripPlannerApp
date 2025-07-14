// src/redux/store.js
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import authReducer from './slices/authSlice';


const rootReducer = combineReducers({
  auth: authReducer
})

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'], // only persist these slices
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // required by redux-persist
    }),
})

export const persistor = persistStore(store)
