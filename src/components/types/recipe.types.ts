export interface IRecipe {
  id: Number;
  name: string;
  image: string;
}

//унаследовали всё кроме 'id' - это для нового рецепта,
export interface IRecipeData extends Omit<IRecipe, 'id'> {}
