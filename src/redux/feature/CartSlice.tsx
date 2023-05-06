import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as request from '../../utils/request';
import config from '../../config';

type item = {
  id: number;
  img: string;
  name: string;
  price: string;
  quantity: number;
};

type userCart = {
  idUser: number;
  cart: item[];
};

interface initialState {
  cart: item[];
  status: string;
  totalPrice: string;
  totalQuantity: number;
}
const cartSlice = createSlice({
  name: 'cart',
  initialState: { cart: [], status: 'idle', totalQuantity: 0, totalPrice: '' } as initialState,
  reducers: {
    addToCart: (state, action) => {
      const find = state.cart.findIndex((item) => item.id === action.payload.id);
      if (find >= 0) {
        state.cart[find].quantity += action.payload.quantity;
      } else {
        state.cart.push(action.payload);
      }
    },
    getCartTotal: (state) => {
      const totalPrice = state.cart.reduce((totalPrice, item) => {
        totalPrice += Number(item.price) * item.quantity;
        return totalPrice;
      }, 0);
      const totalQuantity = state.cart.reduce((totalQuantity, item) => {
        totalQuantity += item.quantity;
        return totalQuantity;
      }, 0);
      state.totalPrice = totalPrice.toFixed(2);
      state.totalQuantity = totalQuantity;
    },
    removeItemFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    increaseItemQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          if (item.quantity>=1 && item.quantity<=99) 
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    },
    decreaseItemQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          if (item.quantity >= 2 && item.quantity <= 99) return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserCart.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getUserCart.fulfilled, (state, action) => {
        if (action.payload) {
          state.cart = action.payload;
          const totalPrice = state.cart.reduce((totalPrice, item) => {
            totalPrice += Number(item.price) * Number(item.quantity);
            return totalPrice;
          }, 0);

          const totalCount = state.cart.reduce((totalCount, item) => {
            totalCount += Number(item.quantity);
            return totalCount;
          }, 0);
          // localStorage.setItem('cart', JSON.stringify(action.payload));
          state.totalPrice = totalPrice.toFixed(2);
          state.totalQuantity = totalCount;
        }
        state.status = 'idle';
      })
      .addCase(getUserCart.rejected, (state) => {
        state.status = 'idle';
        console.error('Cant get cart');
      });
  },
});
export const addUserCart = createAsyncThunk('cart/addUserCart', async (data: userCart) => {
  try {
    const res = await request.get(config.api.userCarts);
    const found = res.find((cart: userCart) => {
      return cart.idUser === data.idUser;
    });
    if (found) {
      await request.put(`${config.api.userCarts}/${found.id}`, {
        idUser: data.idUser,
        cart: data.cart,
      });
    } else {
      await request.post(config.api.userCarts, {
        idUser: data.idUser,
        cart: data.cart,
      });
    }
  } catch (error) {
    console.error('Cant add cart');
  }
});
export const getUserCart = createAsyncThunk('cart/getUserCart', async (idUser: number) => {
  try {
    const res = await request.get(config.api.userCarts);
    const found = res.find((cart: userCart) => {
      return cart.idUser === idUser;
    });
    // console.log(found.cart);
    return found.cart as item[];
  } catch (error) {
    // console.error('Cant get cart');
    const cart:item[]= []
    return cart
  }
});
export const { addToCart, removeItemFromCart, getCartTotal, increaseItemQuantity, decreaseItemQuantity } =
  cartSlice.actions;
export default cartSlice;
