import { createSlice } from "@reduxjs/toolkit";

const lengthSlice = createSlice({
  name: "length",
  initialState: {
    itemLength: [],
  },
  reducers: {
    setItemLength: (state, action) => {
      state.initialState = [];
    },
  },
});

export default lengthSlice;
