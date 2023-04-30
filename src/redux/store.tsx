import { configureStore } from '@reduxjs/toolkit';
import loginSlice from './Slice/LoginSlice';
import registerSlice from './Slice/RegisterSlice';
import productsSlice from './Slice/ProductsSlice';
import * as reduxThunk from 'redux-thunk/extend-redux';
const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    register: registerSlice.reducer,
    products: productsSlice.reducer,
  },
});
export default store;
