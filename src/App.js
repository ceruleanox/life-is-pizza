import { React, Fragment, useState } from 'react';
import { NavLink, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Shop from './components/Pages/Shop';

import Header from './components/Layout/Header';

import Footer from './components/Layout/Footer';

import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';


import './App.css';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  return (

    <div>
      <div className="content1">
        <CartProvider>
          {cartIsShown && <Cart onClose={hideCartHandler} />}
          <Header onShowCart={showCartHandler} />
          <Routes>
            <Route path="/life-is-pizza" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>

        </CartProvider>

      </div>
      <Footer />
    </div>


  );
}

export default App;
