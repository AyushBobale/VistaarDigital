import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { BASE_URL } from "../../config";

// Not many routes are there therefore i am clubbing all of them just in the same

export const rootApi = createApi({
  reducerPath: "rootApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    serverCheck: builder.query({
      query: () => "/",
    }),
    allCustomers: builder.query({
      query: () => "/customer",
    }),
    activeCustomers: builder.query({
      query: () => "/customer/active",
    }),
    accountTransactions: builder.query({
      query: (id) => `/transaction/${id}`,
    }),
    accountTransLessThan: builder.query({
      query: () => `/account/less_than`,
    }),
    accountTransLessThanAmount: builder.query({
      query: (amount) => `/account/less_than/${amount}`,
    }),
    uniqueProducts: builder.query({
      query: () => `/account/unique_products`,
    }),
  }),
});

export const {
  useServerCheckQuery,
  useAllCustomersQuery,
  useActiveCustomersQuery,
  useAccountTransactionsQuery,
  useAccountTransLessThanQuery,
  useUniqueProductsQuery,
  useAccountTransLessThanAmountQuery,
} = rootApi;
