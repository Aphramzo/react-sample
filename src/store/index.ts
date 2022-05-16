import { configureStore } from '@reduxjs/toolkit';
import { userApi } from './user';
import auth from './auth';

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    auth,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;