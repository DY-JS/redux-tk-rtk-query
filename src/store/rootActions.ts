import { actions as favoritesActions } from './favorites/favorites.slice';
import { actions as userActions } from './user/user.slice';
import * as asyncUserActions from './user/user.actions';

//все actions из проекта
export const rootActions = {
  ...favoritesActions,
  ...userActions,
  ...asyncUserActions, //из createAsyncThunk (получение юзера)
};
