import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const BASE_AUTH_URL = process.env.EXPO_PUBLIC_BASE_AUTH_URL;
const API_KEY = process.env.EXPO_PUBLIC_API_KEY;

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_AUTH_URL }),
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: ({ ...userData }) => ({
        url: `accounts:signUp?key=${API_KEY}`,
        method: 'POST',
        body: userData
      })
    }),
    logIn: builder.mutation({
      query: ({ ...userData }) => ({
        url: `accounts:signInWithPassword?key=${API_KEY}`,
        method: 'POST',
        body: userData
      })
    })
  })
})

export const { useSignUpMutation, useLogInMutation } = authApi;