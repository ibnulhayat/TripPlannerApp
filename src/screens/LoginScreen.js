import React, { useState } from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { useDispatch } from 'react-redux';
import AppButton from '../components/AppButton';
import AppInput from '../components/AppInput';
import { login } from '../redux/slices/authSlice';
import { COLORS } from '../styles/colors';

export default function LoginScreen() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('a');
  const [password, setPassword] = useState('ax');

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Email and password are required.');
      return;
    }

    // Simulate login
    dispatch(login());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>

      <AppInput 
        autofocus={true}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <AppInput
        placeholder="Password"
        value={email}
        onChangeText={setPassword}
        keyboardType='password'
        autoCompleteType="password"
        secureTextEntry
      />
      
      <AppButton 
        buttonTitle={'Login'}
        onPress={handleLogin}
      />
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
