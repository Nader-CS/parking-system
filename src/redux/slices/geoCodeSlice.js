import { createSlice } from "@reduxjs/toolkit";

const geocodeSlice = createSlice({
  name: "geocode",
  initialState: {},
  reducers: {
    setGeocode: (state, action) => {
      return action.payload;
    },
  },
});

export const { setGeocode } = geocodeSlice.actions;
export default geocodeSlice.reducer;