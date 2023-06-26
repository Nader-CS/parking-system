import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from '../../services/firebase/firebase-config'

export const logUserIn = createAsyncThunk('user/login', async (uMainData) => {
    const response = await signInWithEmailAndPassword(auth, uMainData.userEmail.toLocaleLowerCase(), uMainData.userPassword)
    return {
        token: response.user.accessToken,
        uid: response.user.uid,
        operationType: response.operationType
    }
})

export const logUserOut = createAsyncThunk('user/logout', async () => {
    const response = await signOut(auth);
    return response;
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
            if (localStorage.getItem('token') !== null) {
                state.validUser = true;
            } else {
                state.validUser = false;
            }
        },
        resetData: (state, action)=>{
            state.isLogged = null;
        }
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
        },
        [logUserOut.fulfilled]: (state, action) => {
            state.validUser = false;
            localStorage.removeItem('token')
            localStorage.removeItem('uid')
        }
    }
})
export const { userValid, resetData } = loginData.actions;
export default loginData.reducer;








