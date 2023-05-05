import { actions as favoritesActions } from '../store/favorites/favorites.slice';
import { actions as userActions } from '../store/user/user.slice';
import * as asyncUserActions from '../store/user/user.actions';

//все actions из проекта
export const rootActions = {
  ...favoritesActions,
  ...userActions,
  ...asyncUserActions, //из createAsyncThunk (получение юзера)
};
