import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



const baseQuery = fetchBaseQuery({
    baseUrl:"http://127.0.0.1:8000/api/v1/",

  prepareHeaders: (headers, { getState }) => {
    const token = getState()?.auth?.token || localStorage.getItem("token");
    if (token) {
      headers.set("authorization", `Token ${token}`);
    }
    return headers;
  },
});

export const api = createApi({
  reducerPath: "api",
  baseQuery,
  tagTypes: ["User"],
  endpoints: (builder) => ({

     register: builder.mutation({
      query: (payload) => ({
        url: "auth/register/",
        method: "POST",
        body: payload,
      }),
    }),


    login: builder.mutation({
       query: ({ email, password }) => ({
        url: "auth/login/",
        method: "POST",
         body: { username: email, password },
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "auth/logout/",
        method: "POST",
      }),
      invalidatesTags: ["User"],
    }),
    getUser: builder.query({
      query: () => "user/",
      providesTags: ["user"],
    }),
  }),
});

export const { useRegisterMutation,useLoginMutation, useLogoutMutation, useGetUserQuery } = api;
