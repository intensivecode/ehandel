import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api" }),
  endpoints: (builder) => ({
    // Foods service
    getFoods: builder.query({
      query: () => "/foods",
      providesTags: ["Foods"],
    }),
    getFood: builder.query({
      query: (id) => "/foods/" + id,
    }),
    updateFood: builder.mutation({
      query: (food) => {
        const { _id, ...body } = food;

        return {
          url: "/foods/" + _id,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: ["Foods"],
    }),

    // Category services
    getCategory: builder.query({
      query: (id) => "/category/" + id,
    }),
  }),
});

export const { useGetFoodsQuery, useGetFoodQuery, useUpdateFoodMutation } = api;
export default api;
