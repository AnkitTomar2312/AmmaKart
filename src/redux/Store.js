import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import Length from "./LengthSlice";
const Store = configureStore({
  reducer: { cart: CartSlice.reducer, length: Length.reducer },
});

export default Store;
