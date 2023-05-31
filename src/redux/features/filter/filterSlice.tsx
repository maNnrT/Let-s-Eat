import { createSlice } from '@reduxjs/toolkit';
import { PriceSliderValue, PriceOrderValue } from '@/enum/enum';

interface initialState {
  typeFilter: string;
  priceFilter: number[];
  comboFilter: boolean;
  productFilter: boolean;
  priceOrder: string;
  searchFilter: string;
}
const filterSlice = createSlice({
  name: 'products',
  initialState: {
    typeFilter: 'all',
    priceFilter: [PriceSliderValue.MIN, PriceSliderValue.MAX],
    comboFilter: false,
    productFilter: false,
    priceOrder: PriceOrderValue.DEFAULT,
    searchFilter: '',
  } as initialState,
  reducers: {
    typeFilterChange: (state, action) => {
      state.typeFilter = action.payload;
    },
    priceFilterChange: (state, action) => {
      state.priceFilter = action.payload;
    },
    comboFilterChange: (state, action) => {
      state.comboFilter = action.payload;
    },
    productFilterChange: (state, action) => {
      state.productFilter = action.payload;
    },
    priceOrderChange: (state, action) => {
      state.priceOrder = action.payload;
    },
    searchFilterChange: (state, action) => {
      state.searchFilter = action.payload;
    },
  },
});
export const {
  typeFilterChange,
  priceFilterChange,
  comboFilterChange,
  productFilterChange,
  priceOrderChange,
  searchFilterChange,
} = filterSlice.actions;
export default filterSlice;
