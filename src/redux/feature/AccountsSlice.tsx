import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as request from '@/utils/request';
import config from '@/config';
import * as yup from 'yup';
type account = {
  username: string;
  password: string;
};
interface initialState {
  accounts: account[];
  status: string;
}
const schema = yup
  .object({
    firstName: yup.string().required('First name is required!'),
    lastName: yup.string().required('Last name is required!'),
    email: yup.string().required('Email is required!').email('Email is invalid!'),
    password: yup.string().required('Password is required!').min(8, 'Password must have at least 8 characters '),
    confirmPassword: yup
      .string()
      .required('Confirm password is required!')
      .min(8, 'Confirm password must have at least 8 characters ')
      .oneOf([yup.ref('password')], 'Confirm password must be the same with password'),
    term: yup.bool().oneOf([true], 'You must agree to our term'),
  })
  .required();
type FormData = yup.InferType<typeof schema>;
const accountsSlice = createSlice({
  name: 'accounts',
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
export const getAccounts = createAsyncThunk('accounts/getAccounts', async () => {
  try {
    const res = await request.get(config.api.accounts);
    return res as account[];
  } catch (error) {
    console.error('Cant get accounts');
  }
});
export const addNewAccounts = createAsyncThunk('accounts/addNewAccounts', async (data: FormData) => {
  try {
    await request.post(config.api.accounts, {
      username: data.email,
      password: data.password,
      firstName: data.firstName,
      lastName: data.lastName,
    });
  } catch {
    console.error("Can't add new account");
  }
});
export default accountsSlice;
