import { useDispatch, useSelector } from 'react-redux';
//import styles from './RecipeItem.module.css';
//import { actions } from './../store/favorites/favorites.slice';
import { useAction } from '../../hooks/useActions';

function User() {
  const { isLoading, error, user } = useSelector((state) => state.user);
  console.log(user);
  // const dispatch = useDispatch();
  const { getUserById } = useAction();
  console.log(getUserById);

  return (
    <div>
      <button onClick={() => getUserById(1)}>Get user</button>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {user ? (
        <div>
          <h3>{user.name}</h3>
        </div>
      ) : (
        <p>user not found</p>
      )}
    </div>
  );
}
export default User;
