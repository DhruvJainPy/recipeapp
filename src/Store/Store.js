import { configureStore } from "@reduxjs/toolkit";
import RecipeSlice from "./RecipeSlice";

export default configureStore({
  reducer: {
    recipes: RecipeSlice,
  },
});
