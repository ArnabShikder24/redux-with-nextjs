import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api' }),
  endpoints: builder => ({
    getNewses: builder.query({
      query: () => '/news'
    }),
    getnews: builder.query({
      query: newsId => `/news/${newsId}`
    })
  })
})

export const { useGetNewsesQuery, useGetnewsQuery } = apiSlice