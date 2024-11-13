import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchShippingDetails = createAsyncThunk(
  "shipping/fetchShippingDetails",
  async () => {
    const response = await axios.get("https://sweetspot-p34g.onrender.com/api/shippingdetails");
    return response.data;
  }
);

const shippingSlice = createSlice({
  name: "shipping",
  initialState: {
    shippingDetails: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchShippingDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchShippingDetails.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.shippingDetails = action.payload;
      })
      .addCase(fetchShippingDetails.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default shippingSlice.reducer;
