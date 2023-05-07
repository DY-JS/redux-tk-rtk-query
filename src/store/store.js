import { configureStore } from '@reduxjs/toolkit';
import favoriteReducer from './favorites/favorites.slice';
import userReducer from './user/user.slice';
import { api } from './api/api';
import { createLogger } from 'redux-logger';

const logger = createLogger({
  //в консоли будет информация о состояниях редакса
  collapsed: true,
});

export const store = configureStore({
  reducer: {
    favorites: favoriteReducer,
    user: userReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware).concat(logger),
});
//к дефолтному Middleware добавили api.middleware и logger
