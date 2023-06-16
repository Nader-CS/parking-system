import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../services/firebase/firebase-config'
// import axios from "axios";

export const logUserIn = createAsyncThunk('user/login', async (uMainData) => {
    const response = await signInWithEmailAndPassword(auth, uMainData.userEmail.toLocaleLowerCase(), uMainData.userPassword)
    console.log(response);
    return {
        token: response.user.accessToken,
        uid: response.user.uid,
        operationType: response.operationType
    }
})

const loginData = createSlice({
    name: 'loginData',
    initialState: {
        userData: {
            userEmail: '',
            userPassword: '',
        },
        validUser: null,
    },
    extraReducers: {
        [logUserIn.fulfilled]: (state, action) => {
        
            if (action.payload.operationType === "signIn") {
                state.validUser = true;
                localStorage.setItem('token', action.payload.token)
                localStorage.setItem('uid', action.payload.uid)
            }
        },
        [logUserIn.rejected]: (state, action) => {
            if (action.type === 'user/login/rejected') state.validUser = false

        }
    }
})
export default loginData;








