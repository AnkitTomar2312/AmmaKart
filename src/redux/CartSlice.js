import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    showCart: true,
  },
  reducers: {
    setShowCart: (state, action) => {
      let user = localStorage.getItem("authResponse");
      user = JSON.parse(user);
      if (user.data.email) state.showCart = false;
    },
  },
});

export default CartSlice;
