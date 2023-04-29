import { configureStore } from '@reduxjs/toolkit';
import loginSlice from '../pages/Login/LoginSlice';
import registerSlice from '../pages/Register/RegisterSlice';
import homepageSlice from '../pages/Homepage/HompageSlice';
import * as reduxThunk from 'redux-thunk/extend-redux';
const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    register: registerSlice.reducer,
    homepage: homepageSlice.reducer,
  },
});
export default store;
