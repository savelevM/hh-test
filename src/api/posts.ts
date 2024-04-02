import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const postsApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], string>({
      query: (text) => `posts?title_like=${text}`,
    }),
    getPostById: builder.query<Post, string | undefined>({
      query: (id) => `posts/${id}`,
    }),
  }),
});

// Автоматически генерируем хуки для использования в компонентах
export const { useGetPostsQuery, useGetPostByIdQuery } = postsApi;
