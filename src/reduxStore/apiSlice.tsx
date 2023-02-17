import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const userToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIyIiwiaWF0IjoxNjQ2OTgyODQ5LCJleHAiOjE2NDk1NzQ4NDl9.lqtZYSyDjGChPl0CAx-jOeMrs4oHh2k9t4kitCZhu0A"; //user

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5001/api",
    // headers: {
    //   "Content-type": "application/json; charset=UTF-8",
    //   Authorization: `Bearer ${userToken}`,
    // },
  }),
  endpoints: (build) => ({
    createUser: build.mutation({
      query: (form) => ({
        url: "/user/sign-up",
        method: "post",
        body: form,
      }),
    }),
    //////
    createFood:build.mutation({
        query:(form)=>({
            url: "/food",
            method:"post",
            body:form
        })
    })
    
  }),
});

export const { useCreateUserMutation,useCreateFoodMutation } = api;
