import {
  FETCH_INITIAL_DATA_REQUEST,
  FETCH_INITIAL_DATA_SUCCESS,
  FETCH_INITIAL_DATA_ERROR,
} from '../constants/HeaderConstants';

export const fetchInitialData = (state = { menu: [] }, action) => {
  switch (action.type) {
    case FETCH_INITIAL_DATA_REQUEST:
      return { ...state, loading: true };
    case FETCH_INITIAL_DATA_SUCCESS:
      return { ...state, menu: action.payload, success: true, loading: false };
    case FETCH_INITIAL_DATA_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
