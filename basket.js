export const GET_SHOPPING_BASKET = 'GET_SHOPPING_BASKET';
export const ADD_PRODUCT_TO_BASKET = 'ADD_PRODUCT_TO_BASKET';

export const getShoppingBasket = (basket) => ({
  type: GET_SHOPPING_BASKET,
  payload: basket,
});

export const addProductToBasket = (basket) => ({
  type: ADD_PRODUCT_TO_BASKET,
  payload: basket,
});

const initState = [];

export const basketSlice = (state = initState, action) => {
  console.log('im the basket reducer! ', action);

  switch (action.type) {
    case GET_SHOPPING_BASKET: {
      console.log('inside GET_SHOPPING_BASKET');

      return action.payload;
    }

    case ADD_PRODUCT_TO_BASKET: {
      console.log('inside ADD_PRODUCT_TO_BASKET');

      return [...state, action.payload];
    }
    default:
      return state;
  }
};
