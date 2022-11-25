import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3004/" }),
  endpoints: (builder) => ({
    getTodos: builder.query({ query: () => "todos", providesTags: ["Todos"] }),
    addTodos: builder.mutation({
      query: (todos) => ({
        url: "todos",
        method: "POST",
        body: todos,
      }),
      invalidatesTags: ["Todos"],
    }),
  }),
});

export const { useGetTodosQuery, useAddTodosMutation } = apiSlice;

export default apiSlice;
