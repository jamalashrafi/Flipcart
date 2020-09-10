import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const SubHeader = () => {
  const menuState = useSelector((state) => state.fetchInitialData);
  const { loading, menu, success, error } = menuState;

  const renderMenu = () => {
    let menuDiv =
      menu.length > 0
        ? menu.map((item) => (
            <li key={item.Category}>
              {item.Category}
              <div className="subHeader__mainMenuNestedDiv">
                <ul className="subHeader__mainMenuUl">
                  {item.Subcategory.map((SubcategoryItem, itr) => (
                    <li key={itr}>{SubcategoryItem}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))
        : '';

    return menuDiv;
  };
  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>error</div>}
      <div className="subHeader">
        <ul className="subHeader__mainMenuUl">{renderMenu()}</ul>
      </div>
    </>
  );
};

export default SubHeader;
