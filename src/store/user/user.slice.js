import { createSlice } from '@reduxjs/toolkit';
import { getUserById } from './user.actions';

const initialState = {
  isLoading: false,
  error: '',
  user: {},
};

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(getUserById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.error;
        state.user = {};
      });
  },
});

export const { actions } = userSlice;
export default userSlice.reducer;
