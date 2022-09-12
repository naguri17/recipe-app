import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    increment: (state) => {
      state.value = state.value + 1;
    },
  },
  //   extraReducers: {
  //     [createPost.pending]: (state, action) => {
  //       state.status = "loading";
  //     },
  //     [createPost.fulfilled]: (state, action) => {
  //       state.status = "success";
  //     },
  //     [createPost.rejected]: (state, action) => {
  //       state.status = "failed";
  //     },
  //   },
});

export const { increment } = bookSlice.actions;

export default bookSlice.reducer;
