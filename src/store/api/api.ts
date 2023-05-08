import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IRecipe } from '../../components/types/recipe.types';

export const api = createApi({
  reducerPath: 'api',
  tagTypes: ['Recipe'], //tagTypes для ревалидации
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4200/recipes', //API_URL из env -нужно сделать
  }),
  endpoints: (builder) => ({
    //хотя-бы один endpoint должен быть, типа глобальный - '/'
    // getRecipes: builder.query<IRecipe[], null>({
    //query: () => '/', //получить все рецепты
    //query: () => '/?_sort=id&_order=desc', //новые добавленные будут сверху-обратная сортировка
    //query: () => '/?_sort=name&_order=desc', //c coртировкой например
    getRecipes: builder.query<IRecipe[], string>({
      query: (query) => `/?_sort=id&_order=desc&q=${query}`, //q=... - это поиск по названию
      // providesTags: () => [
      providesTags: (result, error, query) => [
        {
          type: 'Recipe', //применяем ревалидацию по тэгу 'Recipe'
          id: query, //c cовпадением по searchQuery
        },
      ],
    }),
  }),
  //     createRecipe: builder.mutation({
  //       query: (recipe) => ({
  //         body: recipe,
  //         url: '/',
  //         method: 'POST',
  //       }),
  //     }),
  //   }),
});

export const { useGetRecipesQuery } = api;
