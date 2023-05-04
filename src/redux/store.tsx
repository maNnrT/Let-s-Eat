import { configureStore } from '@reduxjs/toolkit';
import loginSlice from './Slice/LoginSlice';
import registerSlice from './Slice/RegisterSlice';
import productsSlice from './Slice/ProductsSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import * as reduxThunk from 'redux-thunk/extend-redux';
const persistConfig = {
  key: 'root',
  storage,
};
const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    register: registerSlice.reducer,
    products: productsSlice.reducer,
  },
});
// const persistedReducer = persistReducer(persistConfig, store);
export default store;
