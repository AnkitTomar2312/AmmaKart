import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    showCart: false,
  },
  reducers: {
    setShowCart: (state, action) => {
      state.showCart = !state.showCart;
    },
  },
});

export default CartSlice;
