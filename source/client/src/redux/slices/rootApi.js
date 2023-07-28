import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { BASE_URL } from "../../config";

export const rootApi = createApi({
  reducerPath: "rootApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    serverCheck: builder.query({
      query: () => "/",
    }),
  }),
});

export const { useServerCheckQuery } = rootApi;
