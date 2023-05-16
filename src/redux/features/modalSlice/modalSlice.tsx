import { createSlice } from '@reduxjs/toolkit';

interface initialState {
  openModal: boolean;
  id: number | undefined;
}
const modalSlice = createSlice({
  name: 'modal',
  initialState: { openModal: false, id: undefined } as initialState,
  reducers: {
    setOpenModalTrue: (state,actions) => {
      state.openModal = true;
      state.id=actions.payload
    },
    setOpenModalFalse: (state) => {
      state.openModal = false;
    },

  },
});
export const { setOpenModalTrue, setOpenModalFalse } = modalSlice.actions;
export default modalSlice;
