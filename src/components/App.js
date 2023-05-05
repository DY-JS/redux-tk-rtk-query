import '../App.css';
import RecipeItem from './recipe-item/RecipeItem';
import Header from './header/Header';

function App() {
  return (
    <section>
      <Header />
      <div className="App">
        <RecipeItem recipe={{ id: 1, name: 'Lasannna' }} />
        <RecipeItem recipe={{ id: 2, name: 'Pizza' }} />
        <RecipeItem recipe={{ id: 3, name: 'Pasta' }} />
      </div>
    </section>
  );
}

export default App;
