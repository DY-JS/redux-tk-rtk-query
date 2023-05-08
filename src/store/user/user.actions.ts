import { createAsyncThunk } from '@reduxjs/toolkit';
import { IUser } from './user.types';

const fetchUserById = (userId: number): Promise<IUser> =>
  new Promise((resolve) =>
    setTimeout(() => resolve({ id: 1, name: 'Max' }), 1000)
  );

//эта ф-ция считается экшеном и попадает в rootActions
export const getUserById = createAsyncThunk<IUser, number>(
  'user/by-id',
  async (userId: number, thunkApi) => {
    try {
      //getUserById.pending
      const response = await fetchUserById(userId); //getUserById.fulfilled
      return response;
    } catch (e) {
      //   thunkApi.rejectWithValue({});
      return thunkApi.rejectWithValue(e); //getUserById.rejected
    }
  }
);
