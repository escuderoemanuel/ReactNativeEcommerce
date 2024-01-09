import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { base_auth_url, api_key } from "../firebase/database"

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: base_auth_url }),
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: ({ ...userData }) => ({
        url: `accounts:signUp?key=${api_key}`,
        method: 'POST',
        body: userData
      })
    }),
    logIn: builder.mutation({
      query: ({ ...userData }) => ({
        url: `accounts:signInWithPassword?key=${api_key}`,
        method: 'POST',
        body: userData
      })
    })
  })
})

export const { useSignUpMutation, useLogInMutation } = authApi; 