import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './store';
import { Combo, Product } from '@/types/types';
import { PriceOrderValue } from '@/enum/enum';

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

export const getTypeSelector = (state: RootState) => state.filters.typeFilter;
export const getPriceFilterSelector = (state: RootState) => state.filters.priceFilter;
export const getComboFilterSelector = (state: RootState) => state.filters.comboFilter;
export const getProductFilterSelector = (state: RootState) => state.filters.productFilter;
export const getPriceOrderSelector = (state: RootState) => state.filters.priceOrder;
export const getSearchFilterSelector = (state: RootState) => state.filters.searchFilter;

export const getCombosSelector = (state: RootState) => state.combos.combos;
export const getComboByIdSelector = (state: RootState) => state.combos.comboById;
export const getCombosByNameSelector = (state: RootState) => state.combos.combosByName;

export const getIdProductModal = (state: RootState) => state.modal.id;
export const getIsOpenProductDetail = (state: RootState) => state.modal.openProductDetail;
export const getIsOpenSendFormSuccess = (state: RootState) => state.modal.openSendFormSuccess;
export const getIsOpenCheckOutSuccess = (state: RootState) => state.modal.openCheckOutSuccess;
export const getIsOpenCartUpdateSuccess = (state: RootState) => state.modal.openCartUpdateSuccess;
export const getIsOpenCartUpdateFail = (state: RootState) => state.modal.openCartUpdateFail;
export const getIsOpenAddToCart = (state: RootState) => state.modal.openAddToCart;
export const getIsOpenSignIn = (state: RootState) => state.modal.openSignIn;
export const getIsOpenSignUp = (state: RootState) => state.modal.openSignUp;

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
  getTypeSelector,
  getPriceFilterSelector,
  getProductsSelector,
  getSearchFilterSelector,
  (typeFilter, priceFilter, products, searchFilter) => {
    if (typeFilter === 'all') {
      const res = products.filter((product: Product) => {
        return (
          Number(product.price) <= priceFilter[1] &&
          Number(product.price) >= priceFilter[0] &&
          product.name.trim().toLowerCase().includes(searchFilter)
        );
      });
      return res;
    }
    const res = products.filter((product: Product) => {
      return (
        product.type === typeFilter &&
        Number(product.price) <= priceFilter[1] &&
        Number(product.price) >= priceFilter[0] &&
        product.name.trim().toLowerCase().includes(searchFilter)
      );
    });
    return res;
  },
);
export const getCombosByFiltersSelector = createSelector(
  getPriceFilterSelector,
  getCombosSelector,
  getSearchFilterSelector,
  (priceFilter, combos, searchFilter) => {
    const res = combos.filter((combo: Combo) => {
      const price = combo.dishes.reduce((total, dish) => {
        return (total += dish.numberOfDish ? Number(dish.price) * dish.numberOfDish : Number(dish.price) * 0);
      }, 0);
      return (
        Number(price) <= priceFilter[1] &&
        Number(price) >= priceFilter[0] &&
        combo.name.trim().toLowerCase().includes(searchFilter)
      );
    });
    return res;
  },
);
export const getItemsByFilterSelector = createSelector(
  getProductsByFiltersSelector,
  getCombosByFiltersSelector,
  getPriceOrderSelector,
  getComboFilterSelector,
  getProductFilterSelector,
  getTypeSelector,

  (products, combos, priceOrder, comboFilter, productFilter, typeFilter) => {
    let comboArray: Combo[] = [];
    switch (typeFilter) {
      case 'all':
        comboArray = [...combos];
        break;
      default:
        comboArray = combos.filter((combo: Combo) => {
          return combo.dishes.some((dish) => {
            return dish.type === typeFilter;
          });
        });
        break;
    }
    let res: (Product | Combo)[] = [...products, ...comboArray];
    if (comboFilter === true) {
      res.splice(0, products.length);
    } else if (comboFilter === false) {
      res = [...res];
    }
    if (productFilter === true) {
      res.splice(products.length, combos.length);
    } else if (productFilter === false) {
      res = [...res];
    }
    if (comboFilter === true && productFilter === true) {
      res = [...res];
    }
    switch (priceOrder) {
      case PriceOrderValue.DEFAULT:
        break;
      case PriceOrderValue.LOWTOHIGH:
        res.sort(
          (a, b) =>
            Number(
              a.price && !a.dishes
                ? a.price
                : a.dishes &&
                    a.dishes.reduce((total, dish) => {
                      return (total += dish.numberOfDish
                        ? Number(dish.price) * dish.numberOfDish
                        : Number(dish.price) * 0);
                    }, 0),
            ) -
            Number(
              b.price && !b.dishes
                ? b.price
                : b.dishes &&
                    b.dishes.reduce((total, dish) => {
                      return (total += dish.numberOfDish
                        ? Number(dish.price) * dish.numberOfDish
                        : Number(dish.price) * 0);
                    }, 0),
            ),
        );
        break;
      case PriceOrderValue.HIGHTOLOW:
        res.sort(
          (a, b) =>
            Number(
              b.price && !b.dishes
                ? b.price
                : b.dishes &&
                    b.dishes.reduce((total, dish) => {
                      return (total += dish.numberOfDish
                        ? Number(dish.price) * dish.numberOfDish
                        : Number(dish.price) * 0);
                    }, 0),
            ) -
            Number(
              a.price && !a.dishes
                ? a.price
                : a.dishes &&
                    a.dishes.reduce((total, dish) => {
                      return (total += dish.numberOfDish
                        ? Number(dish.price) * dish.numberOfDish
                        : Number(dish.price) * 0);
                    }, 0),
            ),
        );
        break;
      default:
        break;
    }
    return res;
  },
);
