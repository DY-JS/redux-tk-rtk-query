import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  tagTypes: ['Recipe'], //tagTypes для ревалидации
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4200/recipes', //API_URL из env -нужно сделать
  }),
  endpoints: (builder) => ({
    //хотя-бы один endpoint должен быть, типа глобальный - '/'
    getRecipes: builder.query({
      //query: () => '/', //получить все рецепты
      query: () => '/?_sort=id&_order=desc', //новые добавленные будут сверху-обратная сортировка
      //query: () => '/?_sort=name&_order=desc', //c coртировкой например
      providesTags: () => [
        //применяем ревалидацию по тэгу 'Recipe'
        {
          type: 'Recipe',
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
