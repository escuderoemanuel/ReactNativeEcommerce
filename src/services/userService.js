import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const BASE_URL = process.env.EXPO_PUBLIC_BASE_URL;

export const userApi = createApi({
  reducerPath: "profileApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    putProfilePicture: builder.mutation({
      query: ({ image, localId }) => ({
        url: `profilePictures/${localId}.json`,
        method: 'PUT',
        body: {
          image: image,
        }
      })
    }),
    getProfilePicture: builder.query({
      query: (localId) => `profilePictures/${localId}.json`
    }),
    getUserLocation: builder.query({
      query: (localId) => `locations/${localId}.json`
    }),
    putUserLocation: builder.mutation({
      query: ({ localId, location }) => ({
        url: `locations/${localId}.json`,
        method: 'PUT',
        body: {
          latitude: location.latitude,
          longitude: location.longitude,
          address: location.address,
        },
      })
    })
  })
})

export const {
  usePutProfilePictureMutation,
  useGetProfilePictureQuery,
  useGetUserLocationQuery,
  usePutUserLocationMutation
} = userApi