import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const ProductDetails = (props) => {
  const [productState, setProductState] = useState({});
  const { products } = useSelector((state) => state.fetchProductsDetails);

  useEffect(() => {
    let filteredProduct = products.filter(
      (item) => item._id === props.match.params.id
    );
    if (filteredProduct.length > 0) {
      setProductState(filteredProduct[0]);
    }
  }, [products]);
  const addToCart = () => {
    props.history.push({
      pathname: '/cart',
      state: { product: productState },
    });
  };

  return (
    <div>
      {productState.name}
      <button onClick={addToCart}>Add To Cart</button>
    </div>
  );
};

export default ProductDetails;
