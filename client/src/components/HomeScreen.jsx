import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const HomeScreen = () => {
  const data = useSelector((state) => state.fetchProductsDetails);
  const { loading, products, error } = data;
  //const productsArray = men.length > 0 ? men[0].Men[0] : '';

  console.log(products);

  return (
    <>
      <div className="cardContainer">
        <div className="innerContainer">
          {products.map((x) => (
            <Link
              key={x._id}
              to={`/productDetails/${x._id}`}
              className="innerContainer__cardBody"
            >
              <img src={require('../assests/images/slimShirt.jpg')} />
              <div className="innerContainer__cardBody__details">
                <p>{x.name}</p>
                <div className="innerContainer__cardBody__details__ratings">
                  {x.ratings}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
