import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchUserById = (userId) =>
  new Promise((resolve) =>
    setTimeout(() => resolve({ id: 1, name: 'Max' }), 1000)
  );

//эта ф-ция считается экшеном и попадает в rootActions
export const getUserById = createAsyncThunk(
  'user/by-id',
  async (userId, thunkApi) => {
    try {
      //getUserById.pending
      const response = await fetchUserById(userId); //getUserById.fulfilled
      return response;
    } catch (e) {
      //   thunkApi.rejectWithValue({});
      thunkApi.rejectWithValue(e); //getUserById.rejected
    }
  }
);
