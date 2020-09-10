import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeItemFromCart } from '../actions/cartActions';

const Cart = (props) => {
  debugger;
  // const productId = props.location.state.product._id;
  // const qty = props.location.state.product.qty;
  const productToBeAdded = props.location.state.product;
  const { cartItems } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (productToBeAdded) {
      dispatch(addToCart(productToBeAdded));
    }
  }, [dispatch]);

  const proceedToCheckout = () => {
    props.history.push({
      pathname: '/signin',
      state: { redirect: 'shipping' },
    });
  };

  const removeProduct = (id) => {
    dispatch(removeItemFromCart(id));
  };
  return (
    <>
      {cartItems.map((x) => (
        <div key={x._id}>
          <p>{x.name}</p>
          <select
            value={x.qty}
            onChange={(event) => dispatch(addToCart(x, event.target.value))}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <button onClick={() => removeProduct(x._id)}>
            Delete the product
          </button>
          <button onClick={() => proceedToCheckout()}>
            Procced to checkout
          </button>
        </div>
      ))}
    </>
  );
};

export default Cart;
