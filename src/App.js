import { React, Fragment } from 'react';
import { NavLink, BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Shop from './components/Pages/Shop';

import Header from './components/Layout/Header';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </>
  );
}

export default App;
