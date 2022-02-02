import { createStore } from 'redux';

// data
const product = { id: 1, name: 'snickers', basketId: 6 };
const addThisProduct = { id: 4, name: 'milky_way', basketId: 6 };
const basket = [
  { id: 2, name: 'chips_ahoy', basketId: 6 },
  { id: 3, name: 'heath', basketId: 6 },
];

export const GET_PRODUCT = 'GET_PRODUCT';
export const GET_SHOPPING_BASKET = 'GET_SHOPPING_BASKET';
export const ADD_PRODUCT_TO_BASKET = 'ADD_PRODUCT_TO_BASKET';

export const getProduct = (product) => ({
  type: GET_PRODUCT,
  payload: product,
});

export const getShoppingBasket = (basket) => ({
  type: GET_SHOPPING_BASKET,
  payload: basket,
});

export const addProductToBasket = (basket) => ({
  type: ADD_PRODUCT_TO_BASKET,
  payload: basket,
});

const initState = {
  product: {},
  basket: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case GET_PRODUCT: {
      console.log('inside GET_PRODUCT');

      return { ...state, product: action.payload };
    }

    case GET_SHOPPING_BASKET: {
      console.log('inside GET_SHOPPING_BASKET');

      return { ...state, basket: action.payload };
    }

    case ADD_PRODUCT_TO_BASKET: {
      console.log('inside ADD_PRODUCT_TO_BASKET');

      return { ...state, basket: [...state.basket, action.payload] };
    }
    default:
      return state;
  }
};

const store = createStore(reducer);
console.log('state before actions dispatched', store.getState());

store.dispatch(getProduct(product));
console.log(store.getState());

store.dispatch(getShoppingBasket(basket));
console.log(store.getState());

store.dispatch(addProductToBasket(addThisProduct));
console.log(store.getState());
