import { createSlice } from '@reduxjs/toolkit';
import { PriceSlider, PriceOrder } from '@/enum/enum';

interface initialState {
  typeProductFilter: string;
  priceFilter: number[];
  comboFilter: boolean;
  productFilter: boolean;
  priceOrder: string;
  searchFilter: string;
}
const filterSlice = createSlice({
  name: 'products',
  initialState: {
    typeProductFilter: 'all',
    priceFilter: [PriceSlider.MIN, PriceSlider.MAX],
    comboFilter: false,
    productFilter: false,
    priceOrder: PriceOrder.DEFAULT,
    searchFilter: '',
  } as initialState,
  reducers: {
    typeProductFilterChange: (state, action) => {
      state.typeProductFilter = action.payload;
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
  typeProductFilterChange,
  priceFilterChange,
  comboFilterChange,
  productFilterChange,
  priceOrderChange,
  searchFilterChange,
} = filterSlice.actions;
export default filterSlice;
