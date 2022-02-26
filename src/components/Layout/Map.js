import React from 'react';

import PizzaShop from './PizzaShop';

import classes from './Map.module.css';
import pizza from '../../assets/pizzaria.png';
import pizzaShops from './pizza-shops.json';

function Map() {
    return (
        <>
            <div className={classes.map}>
                <div className={classes.paulie}>
                    <a href="https://google.com">
                        <img className={classes.pizza} src={pizza}></img>
                    </a>
                </div>
                <div className={classes.spacca}>
                    <a href="https://google.com">
                        <img className={classes.pizza} src={pizza}></img>
                    </a>
                </div>
                <div className={classes.vito}>
                    <a href="https://google.com">
                        <img className={classes.pizza} src={pizza}></img>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Map;
