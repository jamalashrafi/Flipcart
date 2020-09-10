import {
  FETCH_PRODUCTS_DETAILS_REQUEST,
  FETCH_PRODUCTS_DETAILS_SUCCESS,
  FETCH_PRODUCTS_DETAILS_ERROR,
} from '../constants/ProductsDetailsConstants';
import axios from 'axios';

export const fetchProductsDetails = (reqObj) => async (dispatch) => {
  dispatch({ type: FETCH_PRODUCTS_DETAILS_REQUEST });
  try {
    const { data } = await axios.get('http://localhost:5001/products', {
      params: {
        category: reqObj.category,
        subCategory: reqObj.subcategory,
        pageNo: reqObj.pageNo,
        limit: reqObj.limit,
      },
    });
    dispatch({ type: FETCH_PRODUCTS_DETAILS_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: FETCH_PRODUCTS_DETAILS_ERROR, payload: err });
  }
};
