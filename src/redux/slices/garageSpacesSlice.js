import { createSlice } from "@reduxjs/toolkit";

const garageSpacesSlice = createSlice({
  name: "garageSpaces",
  initialState: {
    data: [],
    isFilled: false,
  },
  reducers: {
    getNearbyGarageSpaces: (state, { payload }) => {
      state.data = payload.filter((item) => {
        return item.garage.availableSpots >= 1;
      });
    },
    checkIsFilled: (state, {payload}) => {
      state.isFilled = payload;
    }
  },
});

export const { getNearbyGarageSpaces, checkIsFilled } = garageSpacesSlice.actions;
export default garageSpacesSlice.reducer;
