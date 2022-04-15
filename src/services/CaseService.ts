import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { ICase } from "../models/ICase";

const BASE_URL = "/api";

export const caseAPI = createApi({
  reducerPath: "caseAPI",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (build) => ({
    fetchCases: build.query<ICase[], "">({
      query: () => ({
        url: "/cases",
      }),
    }),
  }),
});
