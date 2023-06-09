import { useDispatch, useSelector } from 'react-redux';
import styles from './RecipeItem.module.css';
//import { actions } from './../store/favorites/favorites.slice';
import { useAction } from '../../hooks/useActions';
import { useFavorites } from '../../hooks/useFavorites';

function RecipeItem({ recipe }) {
  //const favorites = useSelector((state) => state.favorites);
  const favorites = useFavorites();
  console.log(favorites);
  // const dispatch = useDispatch();
  const { toggleFavorites } = useAction();
  const isExist = favorites.some((r) => r.id === recipe.id);

  const toggleItem = () => {
    toggleFavorites(recipe);
  };

  return (
    <div className={styles.item}>
      <img src={recipe.image} alt={recipe.image} width={100} />
      <h3>{recipe.name}</h3>
      <button
        onClick={toggleItem}
        //dispatch(actions.toggleFavorites(recipe));
      >
        {isExist ? 'Remove from ' : 'Add to '}favorites
      </button>
    </div>
  );
}

export default RecipeItem;
