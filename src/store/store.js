import { configureStore } from '@reduxjs/toolkit';
import favoriteReducer from './favorites/favorites.slice';

export const store = configureStore({
  reducer: {
    favorites: favoriteReducer,
  },
});
