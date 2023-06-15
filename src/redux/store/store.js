import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dateGeocodeReducer from "../slices/geoCodeSlice";

const rootReducer = combineReducers({
  dateGeocode: dateGeocodeReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
