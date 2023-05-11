import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  //   extraReducers: (builder) => {
  //     builder.addCase();
  //   },
});

export default cartSlice.reducer;
