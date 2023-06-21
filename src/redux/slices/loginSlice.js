import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../services/firebase/firebase-config'

export const logUserIn = createAsyncThunk('user/login', async (uMainData) => {
    const response = await signInWithEmailAndPassword(auth, uMainData.userEmail.toLocaleLowerCase(), uMainData.userPassword)
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
        validUser: false,
        isLogged: null,
    },
    reducers: {
        userValid: (state) => {
            console.log(localStorage.getItem('token'));
            if (localStorage.getItem('token' !== null)) {
                state.validUser = true;
                console.log('true');
            } else {
                state.validUser = false;
                console.log('false');
            }
        },
    },
    extraReducers: {
        [logUserIn.fulfilled]: (state, action) => {
            if (action.payload.operationType === "signIn") {
                state.validUser = true;
                state.isLogged = true;
                localStorage.setItem('token', action.payload.token)
                localStorage.setItem('uid', action.payload.uid)
            }
        },
        [logUserIn.rejected]: (state, action) => {
            if (action.type === 'user/login/rejected') {
                state.validUser = false
                state.isLogged = false
            }
        }
    }
})
export const { userValid } = loginData.actions;
export default loginData.reducer;








