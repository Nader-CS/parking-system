import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const _baseURL = `https://parking-system-eaece-default-rtdb.firebaseio.com/`;


export const getUserData = createAsyncThunk('get/uData', async () => {
    const uid = localStorage.getItem("uid");
    const { data } = await axios.get(`${_baseURL}user-collection.json`)
    const users = Object.values(data);
    const getUser = users.filter((user) => user.ownerId === uid)
    console.log(`get user ${getUser}`);
    const sendU = getUser[0];
    console.log(getUser[0]);
    return sendU
})

export const getAdminData = createAsyncThunk('get/admin', async () => {
    const uid = localStorage.getItem("uid");
    const { data } = await axios.get(`${_baseURL}ipark-admin.json`)
    const getAdmin = data.filter((admin) => admin.adminId === uid)
    const sendA = getAdmin[0];
    console.log(getAdmin[0]);
    return sendA
})

const userProfileSlice = createSlice({
    name: 'userProfile',
    initialState: {
        userData: null,
        adminData: null,
    },
    reducers: {
        resetData: (state, action) => {
            state.userData = null;
            state.adminData = null;
        }
    },
    extraReducers: {
        [getUserData.fulfilled]: (state, action) => {
            if (action.payload === undefined) { }
            else {
                state.userData = action.payload
            }
        },
        [getUserData.rejected]: (state, action) => { console.log(action.error); },
        [getAdminData.fulfilled]: (state, action) => {
            if (action.payload === undefined) { }
            else {
                state.adminData = action.payload
            }
        },
        [getAdminData.rejected]: (state, action) => { console.log(action.error); }
    },
})
export const { resetData } = userProfileSlice.actions
export default userProfileSlice.reducer;

