import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/slices/authSlice';
import AppToolBar from '../components/AppToolBar';
import AppButton from '../components/AppButton';
import { COLORS } from '../styles/colors';

const ImageHight = 128

export default function SettingsScreen() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Logout',
        onPress: () => {
          dispatch(logout());
        },
        style: 'destructive',
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <AppToolBar title={'Settings'} />
      <View style={styles.pforileCard}>
          <View style={styles.profileView}>
            <Image source={require('../assets/image/profile.png')} style={styles.imageStyle}/>
          </View>
        <Text style={styles.userName}>{user.name}</Text>
        <Text style={styles.info}>{user.email}</Text>
      </View>

      <View 
        style={{
          position: 'absolute',
          bottom: 0,
          left: 16,
          right: 16
        }}
      >
        <AppButton
          buttonTitle={'Logout'}
          onPress={handleLogout}
        />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: COLORS.appBackgroundColor,
  },
  pforileCard:{
    marginVertical: 12,
    alignItems: 'center',
    justifyContent: 'center'
  },
  profileView:{
    borderRadius: Math.round((ImageHight + 4)/2),
    height: ImageHight + 4,
    width: ImageHight + 4,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0,
    borderColor: COLORS.placeholderTextColor
  },
  imageStyle:{
    height: ImageHight,
    width: ImageHight,
    resizeMode: 'contain'
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 16,
  },
  info: {
    fontSize: 16,
    fontWeight: 'regular',
    color: COLORS.placeholderTextColor,
    marginTop: 12,
  },
});
