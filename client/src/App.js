import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HeaderContainer from './containers/Header/HeaderContainer';
import './sass/main.scss';
import HomeScreen from './components/HomeScreen';
import ProductDetails from './containers/ProductDetails';
import Cart from './containers/Cart';
import Shipping from './containers/Shipping';
import SignIn from './containers/SignIn';

function App() {
  return (
    <Router>
      <div>
        <HeaderContainer />
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/productDetails/:id" component={ProductDetails} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/shipping" component={Shipping} />
        <Route exact path="/signin" component={SignIn} />
      </div>
    </Router>
  );
}

export default App;
