import { createSelector } from '@reduxjs/toolkit';
type product = {
  id: number | undefined;
  type: string;
  img: string;
  name: string;
  description: string;
  ingredient: string;
  detail: string;
  detailImg: string;
  price: string;
};
export const getAccountsLoginSelector = (state: any) => state.login.accounts;
export const getAccountsRegisterSelector = (state: any) => state.register.accounts;
export const getAccountsSelector = (state: any) => state.accounts.accounts;
export const getIsLogin = (state: any) => state.checkLogin.isLogin;
export const getProductsSelector = (state: any) => state.products.products;
export const getProductsByTypeSelector = (state: any) => state.products.products;
export const getProductByIdSelector = (state: any) => state.products.productById;
export const getFilterSelector = (state: any) => state.products.filter;

export const getProductsByFilterSelector = createSelector(getFilterSelector, getProductsSelector,(filter,products)=>{    
    return products.filter((product: product) => {
      return product.type === filter;
    });
});