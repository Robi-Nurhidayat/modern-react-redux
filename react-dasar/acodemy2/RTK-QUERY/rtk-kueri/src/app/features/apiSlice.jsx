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
    deleteTodos: builder.mutation({
      query: ({ id }) => ({
        url: `todos/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["Todos"],
    }),
    updateTodos: builder.mutation({
      query: (todos) => ({
        url: `todos/${todos.id}`,
        method: "PATCH",
        body: todos,
      }),
      invalidatesTags: ["Todos"],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodosMutation,
  useDeleteTodosMutation,
  useUpdateTodosMutation,
} = apiSlice;

export default apiSlice;
