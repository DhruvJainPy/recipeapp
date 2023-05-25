import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk(
  "recipe/fetchRecipes",
  async (query) => {
    const url = `https://api.edamam.com/api/recipes/v2?q=${query}&app_id=ee7723bc&app_key=76413a7a43fdb95342bc57c516168d8d&type=public`;
    const data = await axios.get(url, {
      headers: { "Content-Type": "application/json" },
    });
    return data.data.hits;
  }
);

export const recipeSlice = createSlice({
  name: "recipe",
  initialState: {
    recipes: [],
    currentRecipe: [],
  },
  reducers: {
    reset: (state, action) => {
      state.recipes = [];
    },
    setCurrentRecipe: (state, action) => {
      if (action.payload === null) {
        state.currentRecipe = [];
      } else {
        state.currentRecipe = [action.payload];
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.recipes = action.payload;
      state.currentRecipe = [];
    });
  },
});
export const { reset, setCurrentRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;
