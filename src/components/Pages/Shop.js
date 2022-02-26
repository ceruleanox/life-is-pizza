import { React } from 'react';

import heroImage from "../../assets/pizza_main.jpg";

import classes from './Shop.module.css';
import Items from '../../components/Items/Items';

function Shop() {
    return (
        <>
            <div className={classes['content']}>
                <div className={classes['main-image']}>
                    <img src={heroImage} alt="closeup of a mouth-watering multi-topping pizza"/>
                </div>
                <div className={classes['shop-content']}>
                          <main>
                            <Items />
                        </main>
                </div>
            </div>
        </>
    );
}

export default Shop;