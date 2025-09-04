// src/services/farmersApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



const baseQuery = fetchBaseQuery({
  baseUrl:"http://127.0.0.1:8000/api/v1/",
  prepareHeaders: (headers, { getState }) => {
    const token = getState()?.auth?.token || localStorage.getItem("token");
    if (token) headers.set("Authorization", `Token ${token}`);
    return headers;
  },
});

export const farmersApi = createApi({
  reducerPath: "farmersApi",
  baseQuery,
  tagTypes: ["Farmers"],
  endpoints: (builder) => ({
    getFarmers: builder.query({
      query: () => "farmers/",
      providesTags: ["Farmers"],
    }),
    
    getFarmer: builder.query({
      query: (id) => `farmers/<int:pk>/${id}/`,
    }),

    createFarmer: builder.mutation({
      query: (payload) => ({
        url: "farmers/",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Farmers"],
    }),

    updateFarmer: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `farmers/${id}/`,
        method: "PUT",
        body: patch,
      }),
      invalidatesTags: ["Farmers"],
    }),

    deleteFarmer: builder.mutation({
      query: (id) => ({
        url: `farmers/${id}/`,
        method: "DELETE",
      }),
      invalidatesTags: ["Farmers"],
    }),
  }),
});

export const {
  useGetFarmersQuery,
  useGetFarmerQuery,
  useCreateFarmerMutation,
  useUpdateFarmerMutation,
  useDeleteFarmerMutation,
} = farmersApi;
