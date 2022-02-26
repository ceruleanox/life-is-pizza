import PizzaItemForm from './PizzaItemForm';
import classes from './PizzaItem.module.css';

const PizzaItem = props => {
    const price = `$${props.price.toFixed(2)}`;

    return (
        <li className={classes.pizza}>
            <div>
                <h3>{props.name} - {props.restaurant}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <PizzaItemForm />
            </div>
        </li>
    );
};

export default PizzaItem;