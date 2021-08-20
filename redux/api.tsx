// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface Artist {
  name?: string,
  lastName?: string,
  link?: string,
  subheader?: string,
  description?: string,
  image?: string
}

// Define a service using a base URL and expected endpoints
export const cucoApi = createApi({
  reducerPath: 'cucoApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.API_BASE_URL,
    // prepareHeaders: (headers) => {
    //   const token = localStorage.getItem('token')
    //   if (token) {
    //     headers.set('Authorization', `Bearer ${token}`)
    //   }
    //   return headers
    // },
  }),
  endpoints: (builder) => ({
    getArtists: builder.query({
      query: () => '/artists'
    }),
  }),
})

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetArtistsQuery } = cucoApi