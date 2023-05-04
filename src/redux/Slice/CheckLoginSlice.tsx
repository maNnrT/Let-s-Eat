import { createSlice } from '@reduxjs/toolkit';

interface initialState {
  isLogin: boolean;
}
const checkLoginSlice = createSlice({
  name: 'checkLogin',
  initialState: { isLogin: false } as initialState,
  reducers: {
    setIsLoginTrue: (state) => {
      state.isLogin = true;
    },
    setIsLoginFalse: (state) => {
      state.isLogin = false;
    },
  },
});
export const { setIsLoginTrue, setIsLoginFalse } = checkLoginSlice.actions;
export default checkLoginSlice
