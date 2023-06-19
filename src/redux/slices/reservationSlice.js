import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { FirebaseCollections } from "../../utilities/FirebaseCollections";
export const reserveGarage = createAsyncThunk(
  "reservation/reserve",
  async ({ garageId, availableSpots }) => {
    try {
      // const id = "-NYCeLtaLIe5RwfhvGbF";
      const id = localStorage.getItem("uid");
      if (availableSpots) {
        console.log(`availableSpots ${availableSpots}`);
        const body = { availableSpots: 30 };

        // const url = `https://parking-system-eaece-default-rtdb.firebaseio.com/Garages/0.json`;
        const url = `${FirebaseCollections.baseURL}/${FirebaseCollections.garagesCollection}/${garageId}.json`;
        const res = await axios.patch(url, body);
        console.log(res);
      }

      if (id && garageId) {
        const url = `${FirebaseCollections.baseURL}/${FirebaseCollections.userCollection}/${id}/${FirebaseCollections.reservedGarages}.json`;
        console.log(url);
        const res = await axios.post(url, {
          garageId: garageId,
        });
        console.log(res);
      }
    } catch (error) {
      console.log(error);
    }
  }
);

const ReservationSlice = createSlice({
  name: "reservation",
  initialState: {
    isLoading: false,
    successMessage: null,
    errorMessage: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(reserveGarage.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(reserveGarage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.successMessage = "Reservation successful";
        state.errorMessage = null;
      })
      .addCase(reserveGarage.rejected, (state, action) => {
        state.isLoading = false;
        state.successMessage = null;
        state.errorMessage = "Reservation failed";
      });
  },
});

export default ReservationSlice.reducer;
