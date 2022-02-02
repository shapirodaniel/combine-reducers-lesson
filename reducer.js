import { combineReducers, createStore } from 'redux';
import { logger } from 'redux-logger';

const product = { id: 1, name: 'snickers', basketId: 6 };
const addThisProduct = { id: 4, name: 'milky_way', basketId: 6 };

const basket = [
  { id: 2, name: 'chips_ahoy', basketId: 6 },
  { id: 3, name: 'heath', basketId: 6 },
];

export const GET_PRODUCT = 'GET_PRODUCT';
export const GET_SHOPPING_BASKET = 'GET_SHOPPING_BASKET';
export const ADD_PRODUCT_TO_BASKET = 'ADD_PRODUCT_TO_BASKET';

const getProduct = (product) => ({
  type: GET_PRODUCT,
  payload: product,
});

const getShoppingBasket = (basket) => ({
  type: GET_SHOPPING_BASKET,
  payload: basket,
});

const addProductToBasket = (basket) => ({
  type: ADD_PRODUCT_TO_BASKET,
  payload: basket,
});

const reducer = (state = { product: {}, shoppingBasket: [] }, action) => {
  switch (action.type) {
    case GET_PRODUCT: {
      console.log('inside GET_PRODUCT');

      return { ...state, product: action.payload };
    }

    case GET_SHOPPING_BASKET: {
      console.log('inside GET_SHOPPING_BASKET');

      return { ...state, shoppingBasket: action.payload };
    }

    case ADD_PRODUCT_TO_BASKET: {
      console.log('inside ADD_PRODUCT_TO_BASKET');

      return;
    }
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(logger));

store.dispatch(getProduct(product));
store.dispatch(getShoppingBasket(basket));
store.dispatch(addProductToBasket(addThisProduct));
