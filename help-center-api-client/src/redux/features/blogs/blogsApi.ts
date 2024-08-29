/* eslint-disable @typescript-eslint/no-explicit-any */
import { apiSlice } from "../api/apiSlice";

export const blogApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllBlogs: builder.query({
      query: () => {
        // console.log(args);
        // const params = new URLSearchParams();
        // if (args) {
        //   args?.forEach((item: any) => {
        //     params.append(item.name, item.value as string);
        //   });
        // }
        return {
          url: "/cards",
          method: "GET",
        //   params: params,
        };
      },
      transformResponse: (response:any) => {
        console.log(response)
        return {
          data: response.data.result,
          meta: response.data.meta,
        };
      },
      keepUnusedDataFor: 5,
      providesTags: ["cards"],
    }),
    addNewBlog: builder.mutation({
      query: (data) => ({
        url: "/cards",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["cards"],
    }),
    getSingleBlog: builder.query({
      query: (title) => ({
        url: `/cards/${title}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetAllBlogsQuery,
  useAddNewBlogMutation,
  useGetSingleBlogQuery
} = blogApi;
