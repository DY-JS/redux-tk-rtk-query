import '../App.css';
import RecipeItem from './recipe-item/RecipeItem';
import Header from './header/Header';
import User from './user/User';
import { useGetRecipesQuery } from '../store/api/api';
import CreateRecipe from './create-recipe/CreateRecipe';

function App() {
  // const userId = null;
  // useGetRecipesQuery - загрузка по условию
  //skip, selectFromResult,refetchOnFocus, refetchOnReconnect, pollingInterval

  // const { isLoading, data } = useGetRecipesQuery(undefined, {
  //   skip: !userId,
  // });

  const { isLoading, data } = useGetRecipesQuery(); //cразу загрузятся данные
  console.log(data);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <section>
      <Header />
      <CreateRecipe />
      <div className="App">
        {data ? (
          data.map((recipe) => <RecipeItem key={recipe.id} recipe={recipe} />)
        ) : (
          <p>Not found</p>
        )}
        {/* <User /> */}
      </div>
    </section>
  );
}

export default App;
