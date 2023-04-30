import { createSelector } from '@reduxjs/toolkit';

export const getAccountsLoginSelector = (state: any) => state.login.accounts;
export const getAccountsRegisterSelector = (state: any) => state.register.accounts;
export const getIsLogin = (state: any) => state.login.isLogin;
export const getProductsSelector = (state: any) => state.products.products;
