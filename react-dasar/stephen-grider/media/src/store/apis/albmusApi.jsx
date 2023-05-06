import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const albumsApi = createApi({
  reducerPath: "albums",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),

  endpoints: (build) => ({
    fetchAlbums: build.query({
      query: (user) => ({
        url: "/albums",
        params: {
          userId: user.id,
        },
        method: "GET",
      }),
    }),
  }),
});

export const { useFetchAlbumsQuery } = albumsApi;

export { albumsApi };
