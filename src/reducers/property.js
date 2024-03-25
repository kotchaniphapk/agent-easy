import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../settings";

export const getProperties = createAsyncThunk(
  "property/getProperties",
  async () => {
    const url = `${API_URL}/properties`;
    const method = "GET";
    const headers = new Headers({
      accept: "application/json",
    });

    const response = await fetch(url, { method, headers });

    if (!response.ok) {
      throw new Error("Cannot fetch properties");
    }

    const propertyData = await response.json();
    return propertyData;
  }
);

export const createProperties = createAsyncThunk(
  "property/createProperties",
  async ({ name, address, size, postType, bedRoom, bathRoom, yourStatus }) => {
    const url = `${API_URL}/properties`;
    const method = "POST";
    const headers = new Headers({
      accept: "application/json",
      "content-type": "application/json",
    });
    const body = JSON.stringify({
      data: {
        Name: name,
        Address: address,
        Size: size,
        Post_types: postType,
        Bedroom: bedRoom,
        Bathroom: bathRoom,
        Your_status: yourStatus,
      },
    });

    const response = await fetch(url, { body, headers, method });
    if (!response.ok) {
      throw new Error("Cannot fetch properties");
    }

    const propertyData = await response.json();
    return propertyData;
  }
);


export const removeProperty = createAsyncThunk(
  "property/removeProperty",
  async ({ property_id }) => {
    const url = `${API_URL}/properties/${property_id}`;
    const method = "DELETE";
    const headers = new Headers({
      "Accept": "application/json",
    });

    const response = await fetch(url, { method, headers });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
  }
);

const initialState = {
  data: [],
  status: "idle",
  error: "",
};

const propetySlice = createSlice({
  name: "property",
  initialState,
  extraReducers: (builder) => {
    // getProperties
    builder.addCase(getProperties.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getProperties.fulfilled, (state, action) => {
      state.status = "success";
      state.data = action.payload.data;
    });
    builder.addCase(getProperties.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    });

    // createProperty
    builder.addCase(createProperties.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(createProperties.fulfilled, (state, action) => {
      state.status = "success";
      state.data.push(action.payload.data);
    });
    builder.addCase(createProperties.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    });


     // removeProperty
     builder.addCase(removeProperty.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(removeProperty.fulfilled, (state) => {
      state.loading = false;

    });
    builder.addCase(removeProperty.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

  },
});

export default propetySlice.reducer;
