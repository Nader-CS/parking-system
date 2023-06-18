import { createSlice } from "@reduxjs/toolkit";

const dateGeocodeSlice = createSlice({
  name: "dateGeocode",
  initialState: {
    parkingFrom: null,
    parkingUntil: null,
    geocode: {},
    duration: {},
  },
  reducers: {
    setGeocode: (state, action) => {
      state.geocode = action.payload;
      console.log(state.geocode);
    },
    setParkingFrom: (state, action) => {
      state.parkingFrom = action.payload;
    },
    setParkingUntil: (state, action) => {
      state.parkingUntil = action.payload;
    },
    setDuration: (state, action) => {
      state.duration = action.payload;
      console.log(state.duration);
    },
  },
});

export const { setParkingFrom, setParkingUntil, setGeocode, setDuration } =
  dateGeocodeSlice.actions;

export default dateGeocodeSlice.reducer;
