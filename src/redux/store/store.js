import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dateGeocodeReducer from "../slices/geoCodeSlice";
import garageSpacesSlice from "../slices/garageSpacesSlice";
import selectedGarageSlice from "../slices/selectedGarage"
const rootReducer = combineReducers({
  dateGeocode: dateGeocodeReducer,
  garageSpaces: garageSpacesSlice,
  selectedGarage: selectedGarageSlice

});

const store = configureStore({ reducer: rootReducer });

export default store;
