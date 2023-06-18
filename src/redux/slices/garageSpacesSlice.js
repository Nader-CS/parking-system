import { createSlice } from "@reduxjs/toolkit";

const garageSpacesSlice = createSlice({
    name: "garageSpaces",
    initialState: {
        data: []
    },
    reducers:{
        getNearbyGarageSpaces: (state, {payload}) => {
            state.data = [...payload];
            
        }
    }
})

export const {getNearbyGarageSpaces} = garageSpacesSlice.actions;
export default garageSpacesSlice.reducer;