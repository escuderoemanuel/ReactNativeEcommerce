import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const BASE_URL = process.env.EXPO_PUBLIC_BASE_URL;

export const shopApi = createApi({
  reducerPath: "shopApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => 'categories.json',
    }),
    getProducts: builder.query({
      query: () => 'products.json',
    }),
    getProductsByCategory: builder.query({
      query: (category) => `products.json?orderBy="category"&equalTo="${category}"`,
    }),
    getCategoryThumbnails: builder.query({
      query: () => `categoryThumbnails.json`,
      /* transformResponse: (response) => {
        console.log('response', response)
        return response.map(item => ({
          ...item,
          image: BASE_URL + item.thumbnail
        }))
      } */
    })
  })
})

export const {
  useGetCategoriesQuery,
  useGetProductsQuery,
  useGetProductsByCategoryQuery,
  useGetCategoryThumbnailsQuery
} = shopApi