import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const _baseURL = `https://parking-system-eaece-default-rtdb.firebaseio.com/`;
export const getUserData = createAsyncThunk('get/uData', async (uid) => {
    await axios.get(`${_baseURL}user-collection.json`)
        .then((response) => {
            const users = Object.values(response.data);
            console.log(response.data);
            console.log(users);
        })
        .catch((error) => {
            console.log(error);
        })
})

const userProfileSlice = createSlice({
    name: 'userProfile',
    initialState: {
        userData: {},
        garageData: {},
        adminData: {},
    },
    reducers: {},
    extraReducers: {},
})

export default userProfileSlice;