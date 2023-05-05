import '../App.css';
import RecipeItem from './recipe-item/RecipeItem';
import Header from './header/Header';
import User from './user/User';
import { useGetRecipesQuery } from '../store/api/api';

function App() {
  const { isLoading, data } = useGetRecipesQuery();
  console.log(data);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <section>
      <Header />
      <div className="App">
        {data ? (
          data.map((recipe) => <RecipeItem key={recipe.id} recipe={recipe} />)
        ) : (
          <p>Not found</p>
        )}
        <User />
      </div>
    </section>
  );
}

export default App;
