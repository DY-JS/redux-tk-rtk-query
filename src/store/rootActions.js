import { actions as favoritesActions } from '../store/favorites/favorites.slice';
import { actions as userActions } from '../store/user/user.actions';
import { getUserById } from '../store/user/user.actions';

export const rootActions = {
  //все actions из проекта
  ...favoritesActions,
  getUserById,
};
