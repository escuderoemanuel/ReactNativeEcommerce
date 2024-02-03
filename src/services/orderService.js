import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const BASE_URL = process.env.EXPO_PUBLIC_BASE_URL;

export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getOrders: builder.query({
      query: () => `orders.json`,
    })
  })
})

export const { useGetOrdersQuery } = orderApi;