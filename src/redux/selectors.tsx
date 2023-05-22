import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './store';
import { Product } from '@/types/types';

export const getCartProductSelector = (state: RootState) => state.cart.cartProduct;
export const getCartComboSelector = (state: RootState) => state.cart.cartCombo;
export const getTotalPriceSelector = (state: RootState) => state.cart.totalPrice;
export const getTotalQuantitySelector = (state: RootState) => state.cart.totalQuantity;
export const getDiscountCodeSelector = (state: RootState) => state.cart.discountCode;

export const getAccountsSelector = (state: RootState) => state.accounts.accounts;

export const getIsLogin = (state: RootState) => state.checkLogin.isLogin;
export const getIdUserSelector = (state: RootState) => state.checkLogin.idUser;

export const getProductsSelector = (state: RootState) => state.products.products;
export const getProductByIdSelector = (state: RootState) => state.products.productById;
export const getProductsByIdArraySelector = (state: RootState) => state.products.productsByIdArray;
export const getProductsByNameSelector = (state: RootState) => state.products.productsByName;

export const getDishFilterSelector = (state: RootState) => state.products.dishFilter;
export const getTypeFilterSelector = (state: RootState) => state.products.typeFilter;
export const getPriceFilterSelector = (state: RootState) => state.products.priceFilter;
export const getComboFilterSelector = (state: RootState) => state.products.comboFilter;
export const getPriceOrderSelector = (state: RootState) => state.products.priceOrder;
export const getSearchFilterSelector = (state: RootState) => state.products.searchFilter;

export const getCombosSelector = (state: RootState) => state.combos.combos;
export const getComboByIdSelector = (state: RootState) => state.combos.comboById;
export const getCombosByNameSelector = (state: RootState) => state.combos.combosByName;

export const getIdProductModal = (state: RootState) => state.modal.id;
export const getIsOpenModal = (state: RootState) => state.modal.openModal;
export const getProductsByDishSelector = createSelector(
  getDishFilterSelector,
  getProductsSelector,
  (dishFilter, products) => {
    return products.filter((product: Product) => {
      return product.dish === dishFilter;
    });
  },
);
export const getProductsByFiltersSelector = createSelector(
  getTypeFilterSelector,
  getPriceFilterSelector,
  getProductsSelector,
  getComboFilterSelector,
  getPriceOrderSelector,
  getSearchFilterSelector,
  (typeFilter, priceFilter, products, comboFilter, priceOrder, searchFilter) => {
    if (typeFilter === 'all') {
      const res = products.filter((product: Product) => {
        return Number(product.price) <= priceFilter[1] &&
          Number(product.price) >= priceFilter[0] &&
          product.name.trim().toLowerCase().includes(searchFilter) &&
          comboFilter === false
          ? !product.numberOfDish
          : product.numberOfDish;
      });
      switch (priceOrder) {
        case 'default':
          break;
        case 'lowToHigh':
          res.sort((a, b) => Number(a.price) - Number(b.price));
          break;
        case 'highToLow':
          res.sort((a, b) => Number(b.price) - Number(a.price));
          break;
        default:
          break;
      }
      return res;
    }
    const res = products.filter((product: Product) => {
      return product.type === typeFilter &&
        Number(product.price) <= priceFilter[1] &&
        Number(product.price) >= priceFilter[0] &&
        product.name.trim().toLowerCase().includes(searchFilter) &&
        comboFilter === false
        ? !product.numberOfDish
        : product.numberOfDish;
    });
    switch (priceOrder) {
      case 'default':
        break;
      case 'lowToHigh':
        res.sort((a, b) => Number(a.price) - Number(b.price));
        break;
      case 'highToLow':
        res.sort((a, b) => Number(b.price) - Number(a.price));
        break;
      default:
        break;
    }
    return res;
  },
);
