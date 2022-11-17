import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "products",
  initialState: { list: [], isLoading: false },
  reducers: {
    requested: (products) => {
      products.isLoading = true;
    },
    failed: (products) => {
      products.isLoading = false;
    },
    loaded: (products, action) => {
      products.list = action.payload;
      products.isLoading = false;
    },
  },
});

export const getProducts = (state) => state.entities.products;

export const { loaded, requested } = slice.actions;
export default slice.reducer;
