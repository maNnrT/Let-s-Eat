import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as request from '../../utils/request';
import config from '../../config';
type item = {
  id: number;
  itemId: number;
  img: string;
  name: string;
  price: string;
  quantity: string;
};

type userCart = {
  cart: item[];
  userId: number;
};
interface initialState {
  userCartList: userCart[];
  status: string;
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: { userCartList: [], status: 'idle' } as initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserCartList.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getUserCartList.fulfilled, (state, action) => {
        if (action.payload) state.userCartList = action.payload;
        state.status = 'idle';
      })
      .addCase(getUserCartList.rejected, (state) => {
        state.status = 'idle';
        console.error('Cant get carts');
      });
  },
});
export const getUserCartList = createAsyncThunk('cart/getCart', async () => {
  try {
    const res = await request.get(config.api.userCarts);
    return res as userCart[];
  } catch (error) {
    console.error('Cant get cart');
  }
});

export default cartSlice;
