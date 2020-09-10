import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { fetchInitialData } from './HeaderReducer';
import { fetchProductsDetails } from './ProductsDetailsReducer';
import { cartReducer } from './CartReducer';

const initialState = {};
const reducers = combineReducers({
  fetchInitialData,
  fetchProductsDetails,
  cartReducer,
});
const loggerMiddleware = createLogger({
  predicate: () => process.env.NODE_ENV === 'development',
});
const middlewares = [loggerMiddleware, thunk];
//const middlewareEnhancer = applyMiddleware(...middlewares);
const composedEnhancers = composeWithDevTools(applyMiddleware(...middlewares));

const store = createStore(reducers, initialState, composedEnhancers);

export default store;
