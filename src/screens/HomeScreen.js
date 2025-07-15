import React, { useRef, useState } from 'react';
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import { useDispatch } from 'react-redux';
import AppButton from '../components/AppButton';
import AppInput from '../components/AppInput';
import AppToolBar from '../components/AppToolBar';
import BottomSheet from '../components/BottomSheet';
import { COLORS } from '../styles/colors';
import { locations } from '../utils/locations';
import uuid from 'react-native-uuid';
import { addTrip } from '../redux/slices/tripSlice';
import moment from 'moment';

export default function HomeScreen() {

  const dispatch = useDispatch()

  const [loadLocation, setLoadLocation] = useState('')
  const [unloadLocation, setUnloadLocation] = useState('')
  const [date, setDate] = useState('')
  const [showDatePicker, setShowDatePicker] = useState(false)
  const [showBottomModal, setShowBottomModal] = useState(false)
  const [loadType, setLoadType] = useState(false)



  const onCreateTrip = () => {
    if (!loadLocation || !unloadLocation || !date) {
      Alert.alert('Error', 'All fields are required')
      return;
    }

    if (loadLocation === unloadLocation) {
      Alert.alert('Error', 'Load and Unload locations cannot be the same')
      return;
    }

    const newTrip = {
      id: uuid.v4(),
      loadLocation,
      unloadLocation,
      date: new Date(date)?.toISOString(),
    }

    dispatch(addTrip(newTrip))
    Alert.alert('Success', 'Trip created successfully')
    setLoadLocation('')
    setUnloadLocation('')
    setDate('')
  }

  const handleSelect = (location) => {
    if(loadType == "Load"){
      setLoadLocation(location)
    }else{
      setUnloadLocation(location)
    }
    setShowBottomModal(!showBottomModal)
  }



   console.log("loadLocation", date, loadLocation)

  const renderItem = ({ item }) => (
   <TouchableOpacity
      style={styles.listItem}
      onPress={() => handleSelect(item?.name)}
    >
      <Text style={styles.itemText}>{item.name}</Text>
      <Text style={styles.arrow}>→</Text>
    </TouchableOpacity>
  );

  return (
      <View style={styles.container}>
        <AppToolBar 
          title={'Trip Planner'}
          rightSideShow
        />
        <Text style={styles.title}>Design Your Trip</Text>
         <AppInput
          placeholder="Load  Location"
          value={loadLocation}
          editable={false}
          onPress={()=>{
            setShowBottomModal(!showBottomModal)
            setLoadType("Load")
          }}
        />
        <AppInput
          placeholder="Unload  Location"
          value={unloadLocation}
          editable={false}
          onPress={()=>{
            setShowBottomModal(!showBottomModal)
            setLoadType("Unload")
          }}
        />
        <AppInput
          placeholder="Date & Time"
          value={date? moment(date).format('MMM DD, YYYY . h:mm A')?.toString(): ""}
          editable={false}
          onPress={()=>setShowDatePicker(!showDatePicker)}
        />

        <DatePicker
          modal
          mode="date"
          open={showDatePicker}
          date={date? new Date(date): new Date()}
          onConfirm={(selectedDate) => {
              setShowDatePicker(!showDatePicker)
              setDate(new Date(selectedDate)?.toISOString())
          }}
          onCancel={() =>setShowDatePicker(!showDatePicker)}
          theme={Platform.OS === 'android' ? 'light' : 'auto'}
          androidVariant="nativeAndroid"
        />
        
        <AppButton
          buttonTitle={'Create Trip'}
          onPress={onCreateTrip}
        />

        <BottomSheet visible={showBottomModal} setVisible={setShowBottomModal}>
          <View style={{marginHorizontal: 16}}>
            <Text style={styles.title}>{`Select ${loadType} Location`}</Text>
            <FlatList
              data={locations}
              renderItem={renderItem}
              keyExtractor={(item) => item.id.toString()}
            />
          </View>
        </BottomSheet>
      </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: COLORS.appBackgroundColor,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 12,
  },
  datePicker: {
    marginVertical: 10,
    alignSelf: 'center',
  },
  listItem: {
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  itemText: {
    fontSize: 16,
  },
  arrow: {
    fontSize: 18,
    color: '#999',
  },
})
