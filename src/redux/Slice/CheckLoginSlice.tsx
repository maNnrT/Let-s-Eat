import { createSlice } from '@reduxjs/toolkit';

interface initialState {
  isLogin: boolean;
  idUser: number | undefined;
}
const checkLoginSlice = createSlice({
  name: 'checkLogin',
  initialState: { isLogin: false, idUser: undefined } as initialState,
  reducers: {
    setIsLoginTrue: (state) => {
      state.isLogin = true;
    },
    setIsLoginFalse: (state) => {
      state.isLogin = false;
    },
    setIdUser: ((state,action) => {
        state.idUser= action.payload
      }),
  },
});
export const { setIsLoginTrue, setIsLoginFalse, setIdUser } = checkLoginSlice.actions;
export default checkLoginSlice;
