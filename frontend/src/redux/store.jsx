import {combineReducers} from 'redux';
import {thunk} from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';

//Reducers
import { cartReducer } from './reducers/cartReducers';
import { getProductDetailsReducer,  getProductsReducer } from './reducers/productReducers';


const reducer = combineReducers({
  cart: cartReducer,
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer
});

const store = configureStore({
  reducer,
  Middleware: [thunk]
});


export default store;