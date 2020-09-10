import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MainHeader from './MainHeader';
import SubHeader from './SubHeader';
import { fetchInitialDetails } from '../../actions/headerContainerAction';
import { fetchProductsDetails } from '../../actions/productsDetailsAction';

const HeaderContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchInitialDetails());
    dispatch(
      fetchProductsDetails({
        category: 'Men',
        subcategory: 'Shirts',
        limit: 6,
        pageNo: 0,
      })
    );
  }, []);

  return (
    <>
      <MainHeader />
      <SubHeader />
    </>
  );
};

export default HeaderContainer;
