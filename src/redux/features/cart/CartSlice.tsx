import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as request from '@/utils/request';
import config from '@/config';
import { ComboItem, DiscountCode, ProductItem, UserCart } from '@/types/types';

interface initialState {
  cartProduct: ProductItem[];
  cartCombo: ComboItem[];
  status: string;
  totalPrice: string;
  totalQuantity: number;
  discountCode: DiscountCode[];
}
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartProduct: [],
    cartCombo: [],
    status: 'idle',
    totalQuantity: 0,
    totalPrice: '',
    discountCode: [],
  } as initialState,
  reducers: {
    //action for product
    addToCartProduct: (state, action) => {
      const find = state.cartProduct.findIndex((item) => item.id === action.payload.id);
      if (find >= 0) {
        state.cartProduct[find].quantity += action.payload.quantity;
      } else {
        state.cartProduct.push(action.payload);
      }
    },
    removeProductItemFromCart: (state, action) => {
      state.cartProduct = state.cartProduct.filter((item) => item.id !== action.payload);
    },
    increaseProductItemQuantity: (state, action) => {
      state.cartProduct = state.cartProduct.map((item) => {
        if (item.id === action.payload) {
          if (item.quantity >= 1 && item.quantity <= 99) return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    },
    decreaseProductItemQuantity: (state, action) => {
      state.cartProduct = state.cartProduct.map((item) => {
        if (item.id === action.payload) {
          if (item.quantity >= 2 && item.quantity <= 99) return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    },

    //action for combo
    addToCartCombo: (state, action) => {
      const find = state.cartCombo.findIndex((item) => item.id === action.payload.id);
      if (find >= 0) {
        state.cartCombo[find].quantity += action.payload.quantity;
      } else {
        state.cartCombo.push(action.payload);
      }
    },
    removeComboItemFromCart: (state, action) => {
      state.cartCombo = state.cartCombo.filter((item) => item.id !== action.payload);
    },
    increaseComboItemQuantity: (state, action) => {
      state.cartCombo = state.cartCombo.map((item) => {
        if (item.id === action.payload) {
          if (item.quantity >= 1 && item.quantity <= 99) return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    },
    decreaseComboItemQuantity: (state, action) => {
      state.cartCombo = state.cartCombo.map((item) => {
        if (item.id === action.payload) {
          if (item.quantity >= 2 && item.quantity <= 99) return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    },

    //action for both combo and product
    getCartTotal: (state) => {
      const totalPriceProduct = state.cartProduct.reduce((totalPrice, item) => {
        totalPrice += Number(item.price) * item.quantity;
        return totalPrice;
      }, 0);
      const totalPriceCombo = state.cartCombo.reduce((totalPrice, item) => {
        totalPrice += Number(item.price) * item.quantity;
        return totalPrice;
      }, 0);
      const totalQuantity = state.cartProduct.length + state.cartCombo.length;
      state.totalPrice = (Number(totalPriceProduct) + Number(totalPriceCombo)).toFixed(2);
      state.totalQuantity = totalQuantity;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserCart.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getUserCart.fulfilled, (state, action) => {
        if (action.payload) {
          state.cartProduct = action.payload.cartProduct;
          state.cartCombo = action.payload.cartCombo;
          // console.log(action.payload.cartProduct);
          // const totalPriceProduct = state.cartProduct.reduce((totalPrice, item) => {
          //   totalPrice += Number(item.price) * Number(item.quantity);
          //   return totalPrice;
          // }, 0);
          // const totalPriceCombo = state.cartCombo.reduce((totalPrice, item) => {
          //   totalPrice += Number(item.price) * item.quantity;
          //   return totalPrice;
          // }, 0);

          // const totalQuantity = state.cartProduct.length + state.cartCombo.length;
          // state.totalPrice = (Number(totalPriceProduct) + Number(totalPriceCombo)).toFixed(2);
          // state.totalQuantity = totalQuantity;
        }
        state.status = 'idle';
      })
      .addCase(getUserCart.rejected, (state) => {
        state.status = 'idle';
        console.error('Cant get user cart');
      })
      .addCase(getDiscountCode.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getDiscountCode.fulfilled, (state, action) => {
        if (action.payload) state.discountCode = action.payload;
        state.status = 'idle';
      })
      .addCase(getDiscountCode.rejected, (state) => {
        state.status = 'idle';
        console.error('Cant get discount Code');
      });
  },
});
export const updateCart = createAsyncThunk('cart/updateUserCart', async (data: UserCart) => {
  try {
    await request.put(`${config.api.userCarts}/${data.id}`, {
      cartProduct: data.cartProduct,
      cartCombo: data.cartCombo,
    });
  } catch (error) {
    console.error('Cant update cart');
  }
});
export const addNewUserCart = createAsyncThunk('cart/addNewUserCart', async () => {
  try {
    await request.post(config.api.userCarts, {
      cartProduct: [],
      cartCombo: [],
    });
  } catch (error) {
    console.error('Cant add new user cart');
  }
});
export const getUserCart = createAsyncThunk('cart/getUserCart', async (idUser: number) => {
  try {
    const res = await request.get(`${config.api.userCarts}/${idUser}`);
    if (res) return res as UserCart;
  } catch (error) {
    console.error('Cant get user cart');
  }
});
export const getDiscountCode = createAsyncThunk('cart/getDiscountCode', async () => {
  try {
    const res = await request.get(config.api.discountCode);
    return res as DiscountCode[];
  } catch (error) {
    console.error('Cant get Discount Code');
  }
});
export const {
  addToCartProduct,
  addToCartCombo,
  removeProductItemFromCart,
  removeComboItemFromCart,
  increaseProductItemQuantity,
  increaseComboItemQuantity,
  decreaseProductItemQuantity,
  decreaseComboItemQuantity,
  getCartTotal,
} = cartSlice.actions;
export default cartSlice;
