import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as request from '../../utils/request';
import config from '../../config';

type product = {
  id: number | undefined;
  type: string;
  dish:string;
  img: string;
  name: string;
  description: string;
  ingredient: string;
  detail: string;
  detailImg: string;
  price: string;
};
interface initialState {
  products: product[];
  status: string;
  productById: product;
  filter:string;
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
      dish:'',
      name: '',
      description: '',
      ingredient: '',
      detail: '',
      detailImg: '',
      price: '',
    },
    filter: 'freshbaked',
  } as initialState,
  reducers: {
    filterChange: (state, action) => {
      state.filter= action.payload
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
      });
  },
});
export const getProducts = createAsyncThunk('products/getProducts', async () => {
  try {
    const res = await request.get(config.api.products);
    return res as product[];
  } catch (error) {
    console.error('Cant get products');
  }
});
export const getProductById = createAsyncThunk('products/getProductByID', async (id: number) => {
  try {
    const res = await request.get(`${config.api.products}/${id}`);
    return res as product;
  } catch (error) {
    console.error('Cant get product');
  }
});
export const { filterChange } = productsSlice.actions;
export default productsSlice;