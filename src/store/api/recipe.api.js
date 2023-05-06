import { api } from './api';

// export const api = createApi({    //это из api.js
//   reducerPath: 'api',
//   tagTypes: ['Recipe'], //tagTypes для ревалидации
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'http://localhost:4200/recipes', //API_URL из env -нужно сделать
//   }),

export const recipeApi = api.injectEndpoints({
  //т.е. к api.js добавляем endpoints
  endpoints: (builder) => ({
    // getRecipes: builder.query({   //это в api.js !!! - базовый запрос
    //   query: () => '/', //получить все рецепты
    // }),
    createRecipe: builder.mutation({
      query: (recipe) => ({
        body: recipe,
        url: '/',
        method: 'POST',
      }),
    }),
  }),
});

export const { useCreateRecipeMutation } = recipeApi;

//const [createRecipe, result] = useCreateRecipeMutation();  //отдаёт ф-цию и рез-т
