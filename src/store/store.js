import { configureStore } from '@reduxjs/toolkit';
import favoriteReducer from './favorites/favorites.slice';
import userReducer from './user/user.slice';

export const store = configureStore({
  reducer: {
    favorites: favoriteReducer,
    user: userReducer,
  },
});
