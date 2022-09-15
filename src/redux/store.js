import { configureStore } from "@reduxjs/toolkit";
import ingredientReducer from "./slices/ingredientSlice";
import bookReducer from "./slices/book";
import contextReducer from "./slices/context";

export const store = configureStore({
  reducer: {
    bookReducer,
    contextReducer,
    ingredientReducer,
  },
});
