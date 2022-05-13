import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './index';

const slice = createSlice({
  name: 'auth',
  initialState: { userId: null, token: null } as {
    userId: null | string;
    token: null | string;
  },
  reducers: {
    setCredentials: (
      state,
      {
        payload: { userId, token },
      }: PayloadAction<{ userId: string; token: string }>,
    ) => {
      state.userId = userId;
      state.token = token;
    },
  },
});

export const { setCredentials } = slice.actions;

export default slice.reducer;

export const selectCurrentUserId = (state: RootState) => state.auth.userId;
