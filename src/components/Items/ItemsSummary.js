import classes from './ItemsSummary.module.css';

const ItemsSummary = () => {
    return (
        <section className={classes.summary}>
            <h1>Say 'Cheese'!</h1>
            <h2>Chicago's Iconic Dish, Delivered To You</h2>
            <p>
                Money can’t buy happiness, but it can buy pizza and that’s almost the same thing. 
                Whatever the question, pizza is the answer—
                </p>
            <p>
                Choose your favorite from Chicago's top pizza shops, enjoy oh-so-gooey cheese, and support local businesses!
            </p>
        </section>
    )
};

export default ItemsSummary;