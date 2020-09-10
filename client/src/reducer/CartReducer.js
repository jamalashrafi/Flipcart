import { ADD_TO_CART, REMOVE_ITEM_FROM_CART } from '../constants/CartConstants';

export const cartReducer = (state = { cartItems: [] }, action) => {
  debugger;
  switch (action.type) {
    case ADD_TO_CART:
      const product = state.cartItems.find(
        (itm) => itm._id === action.payload.productToBeAdded._id
      );
      console.log('CartReducer - 1');
      console.log(product);
      if (product) {
        // let updatedCartObj = state.cartItems.find(
        //   (itm) => itm._id === action.payload.productToBeAdded._id
        // );
        // updatedCartObj.quantity = action.payload.qty;

        // console.log('CartReducer - 2');
        // console.log(updatstate.cartItems.map(x=>)
        return {
          cartItems: state.cartItems.map((x) =>
            x._id === action.payload.productToBeAdded._id
              ? action.payload.productToBeAdded
              : x
          ),
        };
      } else {
        console.log('CartReducer - 3');
        console.log({
          ...state,
          cartItems: [...state.cartItems, action.payload.productToBeAdded],
        });
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload.productToBeAdded],
        };
      }

    case REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: [
          ...state.cartItems.filter((item) => item._id === action.payload.id),
        ],
      };
    default:
      return state;
  }
};
