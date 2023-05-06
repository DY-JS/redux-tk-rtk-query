import { useState } from 'react';
import { useCreateRecipeMutation } from '../../store/api/recipe.api';

const CreateRecipe = () => {
  const defaultRecipe = {
    name: '',
    image: '',
  };
  const [recipe, setRecipe] = useState(defaultRecipe);

  const [createRecipe, result] = useCreateRecipeMutation(); //получили ф-цию

  const handleSubmit = (e) => {
    e.preventDefault();
    createRecipe(recipe).then(() => {
      setRecipe(defaultRecipe);
      console.log('Added');
    });
  };
  return (
    <div>
      <h2>Create new recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name="name"
            placeholder="Type name"
            value={recipe.name}
            onChange={(e) => setRecipe({ ...recipe, name: e.target.value })}
          />
        </label>
        <label>
          <input
            type="text"
            name="name"
            placeholder="Type image"
            value={recipe.image}
            onChange={(e) => setRecipe({ ...recipe, image: e.target.value })}
          />
        </label>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateRecipe;
