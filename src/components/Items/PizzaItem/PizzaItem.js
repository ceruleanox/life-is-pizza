import { useContext } from 'react';

import PizzaItemForm from './PizzaItemForm';
import classes from './PizzaItem.module.css';
import CartContext from '../../../store/cart-context';

const PizzaItem = props => {
    const cartCtx = useContext(CartContext);

    const price = `$${props.price.toFixed(2)}`;

    const addToCartHandler = amount => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        });
    };

    return (
        <li className={classes.item}>
            <div>
                <h3>{props.name} - {props.restaurant}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <PizzaItemForm onAddToCart={addToCartHandler}/>
            </div>
        </li>
    );
};

export default PizzaItem;