import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, storage } from '../../services/firebase/firebase-config'
import { ref, uploadBytes } from "firebase/storage";
import axios from "axios";

const _baseURL = `https://parking-system-eaece-default-rtdb.firebaseio.com/`;

export const signUpUser = createAsyncThunk('user/signup', async (uMainData) => {
    const response = await createUserWithEmailAndPassword(auth, uMainData.ownerEmail, uMainData.password)
    return {
        id: response.user.uid
    }
})

export const createUserCollection = createAsyncThunk('user/collection', async (uMainData) => {
    const response = await axios.post(`${_baseURL}user-collection.json`, uMainData)
})

export const createGarageCollection = createAsyncThunk('garage/collection', async (gMainData) => {
    const response = await axios.post(`${_baseURL}garage-collection.json`, gMainData)
    gMainData.images.map((image) => {
        const imageRef = ref(storage, `${response.data.name}/${image.name}`)
        uploadBytes(imageRef, image)
    })
})

const signUpData = createSlice({
    name: 'signupData',
    initialState: {
        ownerId: '',
        ownerDetails: {
            ownerName: '',
            ownerEmail: '',
            ownerPhone: '',
            password: '',
            rePassword: ''
        },
        garageDetails: {
            garageName: '',
            description: '',
            address: '',
            pricePerHour: '',
            availableSpots: '',
            lat: '30.043959',
            lon: '31.227157',
            images: ['', '', '', '']
        },
        usedEmail: false,
        uIsCreated: false,
        uCollection: null,
        gCollection: null,
    },
    extraReducers: {
        [signUpUser.fulfilled]: (state, action) => {
            state.ownerId = action.payload.id
            state.uIsCreated = true
        },
        [signUpUser.rejected]: (state, action) => {
            if (action.error.message === 'Firebase: Error (auth/email-already-in-use).') state.usedEmail = !state.usedEmail;
        },

        [createUserCollection.fulfilled]: (state, action) => {
            state.uCollection = true;
        },

        [createGarageCollection.fulfilled]: (state, action) => {
            state.gCollection = true
        },

    }
})


export const { createNewGarage, createNewUser } = signUpData.actions;
export default signUpData;








