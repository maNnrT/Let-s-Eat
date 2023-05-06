import { createSelector } from '@reduxjs/toolkit';
type product = {
  id: number | undefined;
  type: string;
  dish: string;
  img: string;
  name: string;
  description: string;
  ingredient: string;
  detail: string;
  detailImg: string;
  price: string;
};

export const getUserCartSelector = (state: any) => state.cart.cart;
export const getTotalPriceSelector = (state: any) => state.cart.totalPrice;
export const getTotalQuantitySelector = (state: any) => state.cart.totalQuantity;
export const getAccountsSelector = (state: any) => state.accounts.accounts;
export const getIsLogin = (state: any) => state.checkLogin.isLogin;
export const getIdUserSelector = (state: any) => state.checkLogin.idUser;
export const getProductsSelector = (state: any) => state.products.products;
export const getProductsByTypeSelector = (state: any) => state.products.products;
export const getProductByIdSelector = (state: any) => state.products.productById;
export const getFilterSelector = (state: any) => state.products.filter;

export const getProductsByFilterSelector = createSelector(
  getFilterSelector,
  getProductsSelector,
  (filter, products) => {
    return products.filter((product: product) => {
      return product.dish === filter;
    });
  },
);
