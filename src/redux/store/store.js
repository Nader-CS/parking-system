import { configureStore } from "@reduxjs/toolkit";
import signUpData from "../slices/signupSlice";
import loginData from "../slices/loginSlice";


const store = configureStore({
    reducer: {
        signupReducer: signUpData.reducer,
        loginReducer: loginData.reducer,
    }
});

export default store;
