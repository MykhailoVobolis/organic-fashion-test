import { configureStore } from "@reduxjs/toolkit";
import { contentReduser } from "./content/slice.js";

export const store = configureStore({
  reducer: {
    content: contentReduser,
  },
});
