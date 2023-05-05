import { configureStore } from '@reduxjs/toolkit';
import favoriteReducer from './favorites/favorites.slice';
import userReducer from './user/user.slice';
import { api } from './api/api';

export const store = configureStore({
  reducer: {
    favorites: favoriteReducer,
    user: userReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
