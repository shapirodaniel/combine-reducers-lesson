import { combineReducers, createStore } from 'redux';
import { productSlice, getProduct } from './product.js';
import {
  basketSlice,
  getShoppingBasket,
  addProductToBasket,
} from './basket.js';

const product = { id: 1, name: 'snickers', basketId: 6 };
const addThisProduct = { id: 4, name: 'milky_way', basketId: 6 };

const basket = [
  { id: 2, name: 'chips_ahoy', basketId: 6 },
  { id: 3, name: 'heath', basketId: 6 },
];

// actions filter
const rootReducer = combineReducers({
  product: productSlice,
  basket: basketSlice,
});

const store = createStore(rootReducer);

console.log('state before actions dispatched', store.getState());

store.dispatch(getProduct(product));

console.log(store.getState());

store.dispatch(getShoppingBasket(basket));

console.log(store.getState());

store.dispatch(addProductToBasket(addThisProduct));

console.log(store.getState());
