import { createSlice } from '@reduxjs/toolkit';
interface initialState {
  searchValue: string;
}
const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchValue: '',
  } as initialState,
  reducers: {
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
  },
});
export const { setSearchValue } = searchSlice.actions;
export default searchSlice;

