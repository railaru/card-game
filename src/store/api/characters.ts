import { GetCharactersResponse } from "models";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { QUERY_KEYS } from "store/constants";

export const characterApi = createApi({
  reducerPath: "characterApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_BASE_URL }),
  tagTypes: [QUERY_KEYS.CHARACTERS],
  endpoints: (builder) => ({
    getAll: builder.query<GetCharactersResponse, void>({
      query: () => "/character",
      providesTags: [{ type: QUERY_KEYS.CHARACTERS, id: "LIST" }],
    }),
  }),
});
