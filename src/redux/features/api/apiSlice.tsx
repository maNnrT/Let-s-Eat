import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { Account } from '@/types/types';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  endpoints: (builder) => ({
    getAccounts: builder.query<Account, void>({
      query: () => '/accounts',
    }),
  }),
});

export const { useGetAccountsQuery } = apiSlice;