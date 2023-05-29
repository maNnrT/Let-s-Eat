import { createSlice } from '@reduxjs/toolkit';

interface initialState {
  openProductDetail: boolean;
  openSendFormSuccess: boolean;
  openCheckOutSuccess: boolean;

  openCartUpdateSuccess: boolean;
  openCartUpdateFail: boolean;
  openAddToCart: boolean;
  openSignIn: boolean;
  openSignUp: boolean;
  id: number | undefined;
}
const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    openProductDetail: false,
    id: undefined,
    openSendFormSuccess: false,
    openCheckOutSuccess: false,

    openCartUpdateSuccess: false,
    openCartUpdateFail: false,
    openAddToCart: false,
    openSignIn: false,
    openSignUp: false,
  } as initialState,
  reducers: {
    setOpenProductDetailTrue: (state, actions) => {
      state.openProductDetail = true;
      state.id = actions.payload;
    },
    setOpenProductDetailFalse: (state) => {
      state.openProductDetail = false;
    },
    setOpenSendFormSuccess: (state, action) => {
      state.openSendFormSuccess = action.payload;
    },
    setOpenCheckOutSuccess: (state, action) => {
      state.openCheckOutSuccess = action.payload;
    },
    setOpenCartUpdateSuccess: (state, action) => {
      state.openCartUpdateSuccess = action.payload;
    },
    setOpenCartUpdateFail: (state, action) => {
      state.openCartUpdateFail = action.payload;
    },
    setOpenAddToCart: (state, action) => {
      state.openAddToCart = action.payload;
    },
    setOpenSignIn: (state, action) => {
      state.openSignIn = action.payload;
    },
    setOpenSignUp: (state, action) => {
      state.openSignUp = action.payload;
    },
  },
});
export const {
  setOpenProductDetailTrue,
  setOpenProductDetailFalse,
  setOpenSendFormSuccess,
  setOpenCheckOutSuccess,
  setOpenAddToCart,
  setOpenCartUpdateFail,
  setOpenCartUpdateSuccess,
  setOpenSignIn,
  setOpenSignUp,
} = modalSlice.actions;
export default modalSlice;
