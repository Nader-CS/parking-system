import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, storage } from '../../services/firebase/firebase-config'
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
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
    await axios.post(`${_baseURL}garage-collection.json`, gMainData)
        .then((response) => {
            const imagesURL = [];
            const imagesListRef = response.data.name;
            gMainData.images.map(async (image) => {
                const imageRef = ref(storage, `${imagesListRef}/${image.name}`)
                await uploadBytes(imageRef, image)
                    .then(async () => {
                        await listAll(ref(storage, `${imagesListRef}/`)).then(async (collection) => {
                            const arr = collection.items
                            const lastIdx = arr.length - 1
                            await getDownloadURL(arr[lastIdx]).then(async (url) => {
                                imagesURL.push(url);
                                await axios.patch(`${_baseURL}garage-collection/${imagesListRef}.json`, { ...gMainData, imagesURL: imagesURL })
                            })
                        })
                    })
            })
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
            lat: '',
            lon: '',
            images: ['', '', '', '']
        },
        usedEmail: false,
        uIsCreated: false,
        uCollection: null,
        gCollection: null,
    },
    reducers: {
        getLanLon: (state, action) => {
            const geoLoc = action.payload;
            state.garageDetails.lat = geoLoc.lat;
            state.garageDetails.lon = geoLoc.lng;
        }
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


export const { getLanLon } = signUpData.actions;
export default signUpData.reducer;








