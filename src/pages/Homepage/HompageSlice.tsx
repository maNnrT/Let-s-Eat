import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as request from '../../utils/request';
import config from '../../config';

type product = {
  id: number;
  img: string;
  name: string;
  description: string;
  price: string;
};
interface initialState {
  products: product[];
  status: string;
}
const homepageSlice = createSlice({
  name: 'homepage',
  initialState: { products: [], status: 'idle' } as initialState,
  reducers: {},
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
      });
  },
});
export const getProducts = createAsyncThunk('homepage/getProduct', async () => {
  try {
    const res = await request.get(config.api.products);
    return res as product[];
  } catch (error) {
    console.error('Cant get products');
  }
});

export default homepageSlice;
