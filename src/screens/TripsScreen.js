import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { useSelector } from 'react-redux';
import AppToolBar from '../components/AppToolBar';
import { COLORS } from '../styles/colors';
import moment from 'moment';

export default function TripsScreen() {
  const trips = useSelector((state) => state.trip.trips);

  const renderTrip = ({ item }) => (
    <View style={styles.card}>
      <View style={{flex: 1}}>
        <Text style={styles.tripText}>
          {item.loadLocation} ➜ {item.unloadLocation}
        </Text>
        <Text style={styles.dateText}>{moment(new Date(item.date)).format('MMM DD, YYYY . h:mm A')}</Text>
      </View>
      <Image source={require('../assets/image/trip.png')} style={styles.imageStyle}/>
    </View>
  );

  return (
    <View style={styles.container}>
      <AppToolBar
        title={'Your Trips'}
      />
      <FlatList
        data={trips}
        keyExtractor={(item) => item.id}
        renderItem={renderTrip}
        ListEmptyComponent={<Text style={styles.emptyText}>No trips available.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: COLORS.appBackgroundColor,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 12
  },
  tripText: {
    fontSize: 14,
    color: COLORS.placeholderTextColor
  },
  dateText: {
    fontSize: 16,
    color: COLORS.titleTextColor,
    fontWeight: 'bold',
    marginTop: 4,
  },
  imageStyle:{
    width: 130,
    height: 65,
    resizeMode: 'contain'
  },
  emptyText: {
    marginTop: 50,
    textAlign: 'center',
    color: COLORS.titleTextColor,
    fontSize: 16,
  },
});
