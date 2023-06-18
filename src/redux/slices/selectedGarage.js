import { createSlice } from "@reduxjs/toolkit";

const selectedGarageSlice = createSlice({
    name: "selectedGarage",
    initialState: {
        garage: {},
        price: 0,
    },
    reducers:{
        getSelectedGarage: (state, {payload}) => {
            const {garageObj, price} = payload;
            state.garage = {...garageObj};
            state.price = price;
        },
    }
})

export const {getSelectedGarage} = selectedGarageSlice.actions;
export default selectedGarageSlice.reducer;