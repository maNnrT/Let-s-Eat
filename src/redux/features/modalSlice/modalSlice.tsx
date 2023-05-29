import { createSlice } from '@reduxjs/toolkit';

interface initialState {
  openProductDetail: boolean;
  openSendFormSuccess: boolean;
  openCheckOutSuccess: boolean;
  id: number | undefined;
}
const modalSlice = createSlice({
  name: 'modal',
  initialState: { openProductDetail: false, id: undefined, openSendFormSuccess: false } as initialState,
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
  },
});
export const { setOpenProductDetailTrue, setOpenProductDetailFalse, setOpenSendFormSuccess, setOpenCheckOutSuccess } =
  modalSlice.actions;
export default modalSlice;
