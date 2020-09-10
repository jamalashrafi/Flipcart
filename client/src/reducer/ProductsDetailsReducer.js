import {
  FETCH_PRODUCTS_DETAILS_REQUEST,
  FETCH_PRODUCTS_DETAILS_SUCCESS,
  FETCH_PRODUCTS_DETAILS_ERROR,
} from '../constants/ProductsDetailsConstants';

export const fetchProductsDetails = (
  state = {
    products: [],
  },
  action
) => {
  switch (action.type) {
    case FETCH_PRODUCTS_DETAILS_REQUEST:
      return { ...state, loading: true };
    case FETCH_PRODUCTS_DETAILS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        loading: false,
        success: true,
      };
    case FETCH_PRODUCTS_DETAILS_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
