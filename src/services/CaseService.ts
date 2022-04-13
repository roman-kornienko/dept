import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { ICase } from "../models/ICase";

export const caseAPI = createApi({
  reducerPath: "caseAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (build) => ({
    fetchCases: build.query<ICase[], "">({
      query: () => ({
        url: "/cases",
      }),
    }),
  }),
});
