import Card from '../UI/Card';
import PizzaItem from './PizzaItem/PizzaItem';
import classes from './AvailableItems.module.css';


const PIZZA_ITEMS = [
    {
        id: 'id1',
        name: 'Pizza1',
        restaurant: 'restaurant1',
        description: 'yum!',
        price: 22.99,
    },
    {
        id: 'id2',
        name: 'Pizza2',
        restaurant: 'restaurant2',
        description: 'delicious!',
        price: 15.99,
    },
    {
        id: 'id3',
        name: 'Pizza3',
        restaurant: 'restaurant3',
        description: 'classic!',
        price: 19.99,
    },
    {
        id: 'id4',
        name: 'Pizza4',
        restaurant: 'restaurant4',
        description: 'nom nom!',
        price: 22.99,
    },
    {
        id: 'id5',
        name: 'Pizza5',
        restaurant: 'restaurant5',
        description: 'nom nom!',
        price: 22.99,
    },
    {
        id: 'id6',
        name: 'Pizza6',
        restaurant: 'restaurant6',
        description: 'nom nom!',
        price: 22.99,
    },
    {
        id: 'id7',
        name: 'Pizza7',
        restaurant: 'restaurant7 **SALE**',
        description: 'nom nom!',
        price: .99,
    },
    {
        id: 'id8',
        name: 'Pizza8',
        restaurant: 'restaurant8 **SALE**',
        description: 'nom nom!',
        price: 1.99,
    },
    {
        id: 'id9',
        name: 'Pizza9',
        restaurant: 'restaurant9 **SALE**',
        description: 'nom nom!',
        price: 1.50,
    },
]

const AvailableItems = () => {
    const itemsList = PIZZA_ITEMS.map((item) => ( 
        <PizzaItem 
            key={item.id}
            id={item.id} 
            name={item.name} 
            restaurant={item.restaurant} 
            description={item.description} 
            price={item.price}
        />
    ));

    return (
        <section className={classes.items}>
            <Card>
                <ul>{itemsList}</ul>
            </Card>    
        </section>
    );
};

export default AvailableItems;