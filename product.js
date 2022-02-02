export const GET_PRODUCT = 'GET_PRODUCT';

export const getProduct = (product) => ({
  type: GET_PRODUCT,
  payload: product,
});

//
const sliceOfState = {};

export const productSlice = (state = sliceOfState, action) => {
  console.log('im the product reducer! ', action);

  switch (action.type) {
    case GET_PRODUCT: {
      console.log('inside GET_PRODUCT');

      return action.payload;
    }

    default:
      return state;
  }
};
