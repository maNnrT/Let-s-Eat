import { combineReducers, configureStore } from '@reduxjs/toolkit';
import loginSlice from './Slice/LoginSlice';
import registerSlice from './Slice/RegisterSlice';
import productsSlice from './Slice/ProductsSlice';
import checkLogin from './Slice/CheckLoginSlice';
import accountsSlice from './Slice/AccountsSlice';
import cartSlice from './Slice/CartSlice';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import * as reduxThunk from 'redux-thunk/extend-redux';
const persistConfig = {
  key: 'root',
  storage,
  whitelist:['checkLogin']
};
const rootReducer = combineReducers({
  login: loginSlice.reducer,
  register: registerSlice.reducer,
  accounts: accountsSlice.reducer,
  products: productsSlice.reducer,
  checkLogin: checkLogin.reducer,
  userCartList: cartSlice.reducer
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
// const store = configureStore({
//   reducer: {
//     login: loginSlice.reducer,
//     register: registerSlice.reducer,
//     products: productsSlice.reducer,
//   },
// });
// const persistedReducer = persistReducer(persistConfig, store);
export default store;
