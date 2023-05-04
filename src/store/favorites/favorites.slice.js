import { createSlice } from '@reduxjs/toolkit';
const initialState = [];

export const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorites: (state, { payload: recipe }) => {
      const isExist = state.some((r) => r.id === recipe.id);
      if (isExist) {
        //state = state.filter((r) => r.id !== recipe.id);
        const idx = state.findIndex((r) => r.id === recipe.id);
        if (idx >= 0) {
          state.splice(idx, 1);
        }
        // console.log(state);
      } else state.push(recipe);
    },
  },
});

export const { actions } = favoriteSlice;
export default favoriteSlice.reducer;
