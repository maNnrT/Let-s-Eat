import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './store';
import { Product } from '@/types/types';

export const getUserCartSelector = (state: RootState) => state.cart.cart;
export const getTotalPriceSelector = (state: RootState) => state.cart.totalPrice;
export const getTotalQuantitySelector = (state: RootState) => state.cart.totalQuantity;
export const getDiscountCodeSelector = (state: RootState) => state.cart.discountCode;
export const getAccountsSelector = (state: RootState) => state.accounts.accounts;
export const getIsLogin = (state: RootState) => state.checkLogin.isLogin;
export const getIdUserSelector = (state: RootState) => state.checkLogin.idUser;
export const getProductsSelector = (state: RootState) => state.products.products;
export const getProductsByTypeSelector = (state: RootState) => state.products.products;
export const getProductByIdSelector = (state: RootState) => state.products.productById;
export const getProductsByNameSelector = (state: RootState) => state.products.productByName;
export const getFilterSelector = (state: RootState) => state.products.filter;
export const getIdProductModal = (state: RootState) => state.modal.id;
export const getIsOpenModal = (state: RootState) => state.modal.openModal;
export const getProductsByFilterSelector = createSelector(
  getFilterSelector,
  getProductsSelector,
  (filter, products) => {
    return products.filter((product: Product) => {
      return product.dish === filter;
    });
  },
);
