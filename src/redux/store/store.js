import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dateGeocodeReducer from "../slices/geoCodeSlice";
import garageSpacesSlice from "../slices/garageSpacesSlice";
import selectedGarageSlice from "../slices/selectedGarage";
import signUpData from "../slices/signupSlice";
import loginData from "../slices/loginSlice";
import reservationSlice from "../slices/reservationSlice";
import adminSlice from "../slices/adminSlice";
import userProfileSlice from "../slices/profileSlice";

const rootReducer = combineReducers({
  dateGeocode: dateGeocodeReducer,
  garageSpaces: garageSpacesSlice,
  selectedGarage: selectedGarageSlice,
  signupReducer: signUpData,
  loginReducer: loginData,
  reservation: reservationSlice,
  admin: adminSlice,
  profile: userProfileSlice,
});

const store = configureStore({ reducer: rootReducer });
export default store;
