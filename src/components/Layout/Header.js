import { React, Fragment } from 'react';
import { NavLink, BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css';

const Header = props => {
    return (
        <>
            <header className={classes.header}>
                <h1>Life Is Pizza</h1>
                <div className="navlink">
                    <NavLink className="link" to="/life-is-pizza">Home</NavLink> 
                    <NavLink className="link" to="/about">About</NavLink> 
                    <NavLink className="link" to="/shop">Shop</NavLink> 
                </div>                
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
        </>
    );
}
 
export default Header;
