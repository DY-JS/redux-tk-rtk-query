import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IRecipe } from '../../components/types/recipe.types';
const initialState:IRecipe[] = [];

export const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorites: (state, { payload: recipe }: PayloadAction<IRecipe>) => {
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
