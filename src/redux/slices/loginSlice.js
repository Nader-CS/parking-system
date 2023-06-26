import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../services/firebase/firebase-config";
import { FirebaseCollections } from "../../utilities/FirebaseCollections";

export const logUserIn = createAsyncThunk("user/login", async (uMainData) => {
  const response = await signInWithEmailAndPassword(
    auth,
    uMainData.userEmail.toLocaleLowerCase(),
    uMainData.userPassword
  );
  console.log(response);
  const url = `${FirebaseCollections.baseURL}/${FirebaseCollections.userCollection}`;
  const res = await axios.get(url);

  const data = res.data;
  let garageOwner = true;
  Object.keys(data).map((key) => {
    console.log(data[key]);
    if (data[key].ownerId === response.user.uid) {
      if (data[key].CarOwner === true) {
        garageOwner = false;
      }
      if (data[key].garageOwner === true) {
        garageOwner = true;
      }
      console.log(` data ${data[key].garageOwner}`);
    }
  });
  return {
    token: response.user.accessToken,
    uid: response.user.uid,
    operationType: response.operationType,
    garageOwner: garageOwner,
  };
});

export const logUserOut = createAsyncThunk("user/logout", async () => {
  const response = await signOut(auth);
  return response;
});

const loginData = createSlice({
  name: "loginData",
  initialState: {
    userData: {
      userEmail: "",
      userPassword: "",
    },
    validUser: false,
    isLogged: null,
    isGarageOwner: localStorage.getItem("garageOwner") ? true : false,
  },
  reducers: {
    userValid: (state) => {
      if (localStorage.getItem("token") !== null) {
        state.validUser = true;
      } else {
        state.validUser = false;
      }
    },
    resetData: (state, action) => {
      state.isLogged = null;
    },
  },
  extraReducers: {
    [logUserIn.fulfilled]: (state, action) => {
      if (action.payload.operationType === "signIn") {
        state.validUser = true;
        state.isLogged = true;
        state.isGarageOwner = action.payload.garageOwner;
        localStorage.setItem("token", action.payload.token);
        localStorage.setItem("uid", action.payload.uid);
        localStorage.setItem("garageOwner", action.payload.garageOwner);
        console.log(`garageOwner ${localStorage.getItem("garageOwner")}`);
      }
    },
    [logUserIn.rejected]: (state, action) => {
      if (action.type === "user/login/rejected") {
        state.validUser = false;
        state.isLogged = false;
      }
    },
    [logUserOut.fulfilled]: (state, action) => {
      state.validUser = false;
      state.isLogged = null;
      localStorage.removeItem("token");
      localStorage.removeItem("uid");
      localStorage.removeItem("garageOwner");
    },
  },
});
export const { userValid, resetData } = loginData.actions;
export default loginData.reducer;
