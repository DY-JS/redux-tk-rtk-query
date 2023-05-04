import { useDispatch, useSelector } from 'react-redux';
import styles from './RecipeItem.module.css';
import { actions } from './../store/favorites/favorites.slice';

function RecipeItem({ recipe }) {
  const favorites = useSelector((state) => state.favorites);

  console.log(favorites);
  const dispatch = useDispatch();
  const isExist = favorites.some((r) => r.id === recipe.id);

  return (
    <div className={styles.item}>
      <h3>{recipe.name}</h3>
      <button
        onClick={() => {
          dispatch(actions.toggleFavorites(recipe));
        }}
      >
        {isExist ? 'Remove from ' : 'Add to '}favorites
      </button>
    </div>
  );
}

export default RecipeItem;
