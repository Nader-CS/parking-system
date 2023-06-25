import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {
  getAdminData,
  getAllGarages,
} from "../../services/reservationServices";
import { FirebaseCollections } from "../../utilities/FirebaseCollections";

export const getAdmin = createAsyncThunk("admin/getAdmin", async () => {
  try {
    const adminData = await getAdminData();
    return adminData;
  } catch (error) {
    console.log(error);
  }
});

export const getGarages = createAsyncThunk("admin/getGarages", async () => {
  try {
    const { approvedGarages, unApprovedGarages } = await getAllGarages();
    return { approvedGarages, unApprovedGarages };
  } catch (error) {
    console.log(error);
  }
});

export const approveGarage = createAsyncThunk(
  "admin/approveGarage",
  async (garage) => {
    try {
      const url = `${FirebaseCollections.baseURL}/${FirebaseCollections.garagesCollection}/${garage.id}.json`;
      await axios.patch(url, { approved: true });
      return garage;
    } catch (error) {
      console.log(error);
    }
  }
);

const AdminSlice = createSlice({
  name: "admin",
  initialState: {
    isAdmin: false,
    adminData: null,
    unApprovedGarages: [],
    approvedGarages: [],
    isApprovedLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAdmin.fulfilled, (state, action) => {
        state.isAdmin = action.payload ? true : false;
        state.adminData = action.payload ?? null;
        console.log(
          `state admin id ${state.adminData.adminId} ${state.isAdmin}`
        );
      })
      .addCase(getGarages.fulfilled, (state, action) => {
        state.unApprovedGarages = action.payload.unApprovedGarages;
        state.approvedGarages = action.payload.approvedGarages;
        // console.log(
        //   `state admin id ${state.adminData.adminId} approvedGarages ${state.approvedGarages.length} unApprovedGarages ${state.unApprovedGarages.length}`
        // );
      })
      .addCase(approveGarage.pending, (state, action) => {
        state.isApprovedLoading = true;
      })
      .addCase(approveGarage.fulfilled, (state, action) => {
        state.isApprovedLoading = false;
        const garage = action.payload;
        if (state.approvedGarages != null) {
          state.approvedGarages = [...state.approvedGarages, garage];
        }
        if (state.unApprovedGarages != null) {
          state.unApprovedGarages = state.unApprovedGarages.filter(
            (g) => g.id !== garage.id
          );
        }
      });
  },
});

export default AdminSlice.reducer;

// to use getAdmin dispatch(getAdmin());
// to use getGarages dispatch(getGarages());
// to use approveGarage dispatch(approveGarage(garage)); send whole garage obj
