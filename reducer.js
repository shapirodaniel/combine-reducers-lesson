import { combineReducers } from 'redux';

export const GET_PRODUCT = 'GET_PRODUCT';
export const GET_SHOPPING_BASKET = 'GET_SHOPPING_BASKET';
export const UPDATE_SHOPPING_BASKET = 'UPDATE_SHOPPING_BASKET';

const productReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_CANDY:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

const shoppingBasketReducer = (state = [], action) => {
  switch (action.type) {
    case GET_SHOPPING_BASKET:
      return action.payload;

    case UPDATE_SHOPPING_BASKET: {
      const updatedBasket = state.map((basket) => {
        if (basket.id === action.basketId) {
          return { ...basket, booked: true };
        } else {
          return basket;
        }
      });

      return updatedBasket;
    }

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  product: productReducer,
  shoppingBasket: shoppingBasketReducer,
});

export default rootReducer;
