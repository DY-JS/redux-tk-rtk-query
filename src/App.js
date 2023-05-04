import './App.css';
import RecipeItem from './recipe-item/RecipeItem';

function App() {
  return (
    <div className="App">
      <RecipeItem recipe={{ id: 1, name: 'Lasannna' }} />
      <RecipeItem recipe={{ id: 2, name: 'Pizza' }} />
      <RecipeItem recipe={{ id: 3, name: 'Pasta' }} />
    </div>
  );
}

export default App;
