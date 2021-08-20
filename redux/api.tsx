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
  tagTypes: ['Artist'],
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
      query: () => 'artists',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Artist' as const, id })),
              { type: 'Artist', id: 'LIST' },
            ]
          : [{ type: 'Artist', id: 'LIST' }],
    }),
    getArtist: builder.query<Artist, string>({
      query: (id) => `artists/${id}`,
    }),
    deleteArtist: builder.mutation<{ success: boolean; id: string }, string>({
      query: (id) => {
        return {
          url: `artists/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'Artist', id }],
    }),
  }),
})

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetArtistsQuery, useGetArtistQuery, useDeleteArtistMutation } = cucoApi