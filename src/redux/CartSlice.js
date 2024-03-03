import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    showCart: false,
  },
  reducers: {
    updateCart: (state, action) => {
      state.showCart = !state.showCart;
    },
  },
});

export default cartSlice;
