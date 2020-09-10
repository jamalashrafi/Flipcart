import axios from 'axios';
import {
  FETCH_INITIAL_DATA_REQUEST,
  FETCH_INITIAL_DATA_SUCCESS,
  FETCH_INITIAL_DATA_ERROR,
} from '../constants/HeaderConstants';

export const fetchInitialDetails = () => async (dispatch) => {
  dispatch({ type: FETCH_INITIAL_DATA_REQUEST });
  try {
    const { data } = await axios.get('http://localhost:5001/menu');
    dispatch({ type: FETCH_INITIAL_DATA_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_INITIAL_DATA_ERROR, payload: error });
  }
};
