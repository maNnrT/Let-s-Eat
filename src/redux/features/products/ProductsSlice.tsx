import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as request from '@/utils/request';
import config from '@/config';
import { Combo, Product } from '@/types/types';

interface initialState {
  products: Product[];
  status: string;
  productById: Product;
  filter: string;
  combos: Combo[]
}
const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    status: 'idle',
    productById: {
      id: undefined,
      type: '',
      img: '',
      dish: '',
      name: '',
      description: '',
      ingredient: '',
      detail: '',
      detailImg: '',
      price: '',
      quantity:undefined,
    },
    combos:[],
    filter: 'freshbaked',
  } as initialState,
  reducers: {
    filterChange: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        if (action.payload) state.products = action.payload;
        state.status = 'idle';
      })
      .addCase(getProducts.rejected, (state) => {
        state.status = 'idle';
      })
      .addCase(getProductById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        if (action.payload) state.productById = action.payload;
        state.status = 'idle';
      })
      .addCase(getProductById.rejected, (state) => {
        state.status = 'idle';
      })
      .addCase(getCombos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getCombos.fulfilled, (state, action) => {
        if (action.payload) state.combos = action.payload;
        state.status = 'idle';
      })
      .addCase(getCombos.rejected, (state) => {
        state.status = 'idle';
      });
  },
});
export const getProducts = createAsyncThunk('products/getProducts', async () => {
  try {
    const res = await request.get(config.api.products);
    return res as Product[];
  } catch (error) {
    console.error('Cant get products');
  }
});
export const getCombos = createAsyncThunk('products/getCombos', async () => {
  try {
    const res = await request.get(config.api.combos);
    return res as Combo[];
  } catch (error) {
    console.error('Cant get combos');
  }
});
export const getProductById = createAsyncThunk('products/getProductByID', async (id: number) => {
  try {
    const res = await request.get(`${config.api.products}/${id}`);
    return res as Product;
  } catch (error) {
    console.error('Cant get product');
  }
});
export const { filterChange } = productsSlice.actions;
export default productsSlice;
