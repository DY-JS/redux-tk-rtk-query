import '../App.css';
import RecipeItem from './recipe-item/RecipeItem';
import Header from './header/Header';
import User from './user/User';
import { useGetRecipesQuery } from '../store/api/api';
import CreateRecipe from './create-recipe/CreateRecipe';
import { useState } from 'react';

function App() {
  // const userId = null;
  // useGetRecipesQuery - загрузка по условию
  //skip, selectFromResult,refetchOnFocus, refetchOnReconnect, pollingInterval

  // const { isLoading, data } = useGetRecipesQuery(undefined, {
  //   skip: !userId,
  // });

  const [searchQuery, setSearchQuery] = useState('');
  const [readySearch, setReadySearch] = useState(''); //при клике на кнопку

  // const { isLoading, data } = useGetRecipesQuery(null); //cразу загрузятся все данные
  const { isLoading, data } = useGetRecipesQuery(readySearch); //readySearch перед в запрос
  console.log(data);

  const handleSubmit = () => {
    // setIsSearch(true);
    setReadySearch(searchQuery); //при клике на кнопку searchQuery перед. в readySearch
  };

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <section>
      <Header />
      <CreateRecipe />
      <div style={{ padding: '10px' }}>
        <h3>Search field:</h3>
        <input
          type="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Type for search"
        />
        <button onClick={handleSubmit}>Search</button>
      </div>

      <div className="App">
        {data ? (
          data.map((recipe) => (
            <RecipeItem key={recipe.id.toString()} recipe={recipe} />
          ))
        ) : (
          <p>Not found</p>
        )}
        <User />
      </div>
    </section>
  );
}

export default App;
