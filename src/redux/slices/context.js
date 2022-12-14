import { createSlice } from "@reduxjs/toolkit";
import { headerValues } from "./../../constants/enum";

const initialState = {
  headerOption: "recipes",
};

export const contextSlice = createSlice({
  name: "context",
  initialState,
  reducers: {
    onHeaderValuesChange: (state, action) => {
      state.headerOption = action.payload;
    },
  },
});

export const { onHeaderValuesChange } = contextSlice.actions;

export default contextSlice.reducer;
