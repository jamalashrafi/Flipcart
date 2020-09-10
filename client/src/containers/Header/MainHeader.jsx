import React from 'react';
import SearchBar from './SearchBar';

const MainHeader = () => {
  return (
    <div className="mainHeader">
      <div className="mainHeader__logoLink">
        <a href="/" className="mainHeader__logoLink__anchor">
          <img
            src={require('../../../src/assests/images/flipkart.png')}
            alt="flipkart"
            className="mainHeader__logoLink__anchor__imgFlipkart"
          />
        </a>
        <a href="/" className="mainHeader__logoLink__anchor">
          <span className="mainHeader__logoLink__anchor__logoMainText">
            Explore
          </span>
          &nbsp;
          <span className="mainHeader__logoLink__anchor__logoSubText">
            Plus
          </span>
          <img
            src={require('../../../src/assests/images/plus.png')}
            alt="plus"
            className="mainHeader__logoLink__anchor__imgPlus"
          />
        </a>
      </div>
      {/*logoLink ends here*/}
      <SearchBar />
      <button>Login</button>
      <ul>
        <li>icon</li>
        <li>icon</li>
      </ul>
    </div>
  );
};

export default MainHeader;
