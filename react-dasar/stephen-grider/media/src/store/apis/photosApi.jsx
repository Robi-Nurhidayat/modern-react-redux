import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";

const photosApi = createApi({
  reducerPath: "photos",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),

  endpoints: (builder) => ({
    fetchPhotos: builder.query({
      query: (album) => ({
        url: "/photos",
        params: {
          albumId: album.id,
        },
        method: "GET",
      }),
    }),
    addPhotos: builder.mutation({
      query: (album) => ({
        method: "POST",
        url: "/photos",
        body: {
          albumId: album.id,
          url: faker.image.abstract(150, 150, true),
        },
      }),
    }),
    removePhotos: builder.mutation({
      query: (photo) => ({
        method: "DELETE",
        url: `/photos/${photo.id}`,
      }),
    }),
  }),
});

export const {
  useFetchPhotosQuery,
  useRemovePhotosMutation,
  useAddPhotosMutation,
} = photosApi;

export { photosApi };
