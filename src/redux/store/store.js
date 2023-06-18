import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dateGeocodeReducer from "../slices/geoCodeSlice";
import garageSpacesSlice from "../slices/garageSpacesSlice";
import selectedGarageSlice from "../slices/selectedGarage"
import signUpData from "../slices/signupSlice";
import loginData from "../slices/loginSlice";

const rootReducer = combineReducers({
  dateGeocode: dateGeocodeReducer,
  garageSpaces: garageSpacesSlice,
  selectedGarage: selectedGarageSlice,
  signupReducer: signUpData,
  loginReducer: loginData,
});


const store = configureStore({ reducer: rootReducer });
export default store;
