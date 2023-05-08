import { FormEvent, useState } from 'react';
import { useCreateRecipeMutation } from '../../store/api/recipe.api';
import { IRecipeData } from '../types/recipe.types';

const CreateRecipe = () => {
  const defaultRecipe: IRecipeData = {
    //делаем без id, json-server сам добавит id
    name: '',
    image: '',
  };
  const [recipe, setRecipe] = useState<IRecipeData>(defaultRecipe);

  //const [createRecipe, result] = useCreateRecipeMutation();
  const [createRecipe] = useCreateRecipeMutation(); //получили ф-цию

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
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
