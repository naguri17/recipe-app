import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const ingredienetSlice = createSlice({
  name: "ingredient",
  initialState: {
    listItems: [
      { id: 1, name: "salad", amount: 2 },
      { id: 2, name: "egg", amount: 3 },
      { id: 3, name: "tomato", amount: 3 },
    ],
  },
  reducers: {
    addIngredient: (state, action) => {
      const tempItem = { ...action.payload, id: nanoid() };
      state.listItems.push(tempItem);
    },
    removeIngredient: (state, action) => {
      const newListItems = state.listItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.listItems = newListItems;
    },
    clearIngredient: (state) => {
      state.listItems = [];
    },
  },
});

export const { addIngredient, removeIngredient, clearIngredient } =
  ingredienetSlice.actions;

export default ingredienetSlice.reducer;
