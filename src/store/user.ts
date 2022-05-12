import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { User } from '../models/user';

export const userApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://<api>.execute-api.us-west-1.amazonaws.com/prod/',
    prepareHeaders: (headers, { getState }) => {
      // This would be a great place to pull the login to actually pull
      // the users JWT or other token type from some state or
      // local storage instead of just using a generice api key
      //const token = (getState() as RootState).auth.token

      headers.set('x-api-key', '<key>');

      return headers;
    },
  }),
  endpoints: (build) => ({
    login: build.mutation<User, { username: string; password: string }>({
      query: (body) => ({
        url: 'login',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useLoginMutation } = userApi;
