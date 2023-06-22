import { createSlice } from "@reduxjs/toolkit";

const garageSpacesSlice = createSlice({
  name: "garageSpaces",
  initialState: {
    data: [],
  },
  reducers: {
    getNearbyGarageSpaces: (state, { payload }) => {
      state.data = payload.filter((item) => {
        return item.garage.availableSpots >= 1;
      });
    },
  },
});

export const { getNearbyGarageSpaces } = garageSpacesSlice.actions;
export default garageSpacesSlice.reducer;
