import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const BASE_URL = process.env.EXPO_PUBLIC_BASE_URL;

export const ordersApi = createApi({
  reducerPath: 'ordersApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getOrdersByUser: builder.query({
      query: (localId) => `orders/${localId}.json`
    }),
    postOrders: builder.mutation({
      query: ({ ...order }) => ({
        url: `orders/${order.localId}.json`,
        method: 'POST',
        body: order,
      })
    })
  })
})

export const { useGetOrdersByUserQuery, usePostOrdersMutation } = ordersApi;
