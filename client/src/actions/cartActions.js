import { ADD_TO_CART, REMOVE_ITEM_FROM_CART } from '../constants/CartConstants';

export const addToCart = (productToBeAdded, qty) => async (dispatch) => {
  dispatch({
    type: ADD_TO_CART,
    payload: {
      productToBeAdded: { ...productToBeAdded, quantity: parseInt(qty) },
    },
  });
};

export const removeItemFromCart = (id) => (dispatch) => {
  dispatch({ type: REMOVE_ITEM_FROM_CART, payload: id });
};
