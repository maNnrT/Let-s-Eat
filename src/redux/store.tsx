import { combineReducers, configureStore } from '@reduxjs/toolkit';
import loginSlice from './feature/LoginSlice';
import registerSlice from './feature/RegisterSlice';
import productsSlice from './feature/ProductsSlice';
import checkLogin from './feature/CheckLoginSlice';
import accountsSlice from './feature/AccountsSlice';
import cartSlice from './feature/CartSlice';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import * as reduxThunk from 'redux-thunk/extend-redux';
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['checkLogin','cart'],
};
const rootReducer = combineReducers({
  login: loginSlice.reducer,
  register: registerSlice.reducer,
  accounts: accountsSlice.reducer,
  products: productsSlice.reducer,
  checkLogin: checkLogin.reducer,
  cart: cartSlice.reducer,
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

export const persistor = persistStore(store);
export default store;
