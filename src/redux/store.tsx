import { combineReducers, configureStore } from '@reduxjs/toolkit';
import productsSlice from './features/products/ProductsSlice';
import checkLogin from './features/checkLogin/CheckLoginSlice';
import accountsSlice from './features/account/AccountsSlice';
import cartSlice from './features/cart/CartSlice';
import modalSlice from './features/modalSlice/modalSlice';
import combosSlice from './features/combos/CombosSlice';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import * as reduxThunk from 'redux-thunk/extend-redux';
import searchSlice from './features/search/searchSlice';
import filterSlice from './features/filter/filterSlice';
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['checkLogin', 'cart'],
};
const rootReducer = combineReducers({
  accounts: accountsSlice.reducer,
  products: productsSlice.reducer,
  combos: combosSlice.reducer,
  checkLogin: checkLogin.reducer,
  cart: cartSlice.reducer,
  modal: modalSlice.reducer,
  search: searchSlice.reducer,
  filters: filterSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
export default store;
