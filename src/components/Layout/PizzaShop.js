import React from 'react';

import classes from './Map.module.css';
import pizza from '../../assets/pizzaria.png';

function PizzaShop(props) {

    const styling = {

    }
    
    return (
        <>
            <div className='pizzaShop'>
                <a href="https://google.com">
                    <img className={classes.pizza} src={pizza}></img>
                </a>
            </div>
        </>
    )
}

export default PizzaShop;

