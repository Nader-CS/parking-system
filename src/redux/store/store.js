import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dateGeocodeReducer from "../slices/geoCodeSlice";
import garageSpacesSlice from "../slices/garageSpacesSlice";

const rootReducer = combineReducers({
  dateGeocode: dateGeocodeReducer,
  garageSpaces: garageSpacesSlice,

});

const store = configureStore({ reducer: rootReducer });

export default store;
