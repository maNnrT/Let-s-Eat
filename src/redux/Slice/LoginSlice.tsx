import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as request from '../../utils/request';
import config from '../../config';
type account = {
  username: string;
  password: string;
};
interface initialState {
  accounts: account[];
  status: string;
}
const loginSlice = createSlice({
  name: 'login',
  initialState: { accounts: [], status: 'idle' } as initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAccounts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getAccounts.fulfilled, (state, action) => {
        // console.log('check',{action});
        if (action.payload) state.accounts = action.payload;
        state.status = 'idle';
      })
      .addCase(getAccounts.rejected, (state) => {
        state.status = 'idle';
        console.error('Cant get accounts');
      });
  },
});
export const getAccounts = createAsyncThunk('login/getAccounts', async () => {
  try {
    const res = await request.get(config.api.accounts);
    return res as account[];
  } catch (error) {
    console.error('Cant get accounts');
  }
});
export default loginSlice;
