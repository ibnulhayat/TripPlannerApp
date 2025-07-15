// src/redux/slices/tripSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  trips: [],
};

const tripSlice = createSlice({
  name: 'trip',
  initialState,
  reducers: {
    addTrip: (state, action) => {
      state.trips.push(action.payload);
    },
    deleteTrip: (state, action) => {
      state.trips = state.trips.filter(trip => trip.id !== action.payload);
    },
    setTrips: (state, action) => {
      state.trips = action.payload;
    },
  },
});

export const { addTrip, deleteTrip, setTrips } = tripSlice.actions;
export default tripSlice.reducer;
