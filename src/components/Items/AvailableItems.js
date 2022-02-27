import Card from '../UI/Card';
import PizzaItem from './PizzaItem/PizzaItem';
import classes from './AvailableItems.module.css';


const PIZZA_ITEMS = [
    {
        id: 'id1',
        name: 'Carbonara',
        restaurant: 'Pizzeria Bebu',
        description: 'panna, caramelized onion, house-cured pancetta, egg, scallion, black pepper',
        price: 22.99,
    },
    {
        id: 'id2',
        name: 'Mystery Box',
        restaurant: 'Pizzeria Bebu',
        description: 'Help reduce food waste by ordering this mystery grab bag at a discounted price!',
        price: 15.99,
    },
    {
        id: 'id3',
        name: 'Lady Lola',
        restaurant: "Paulie Gee's Logan Square",
        description: 'italian tomatoes, kimchi, serrano peppers, green onions, bacon jam, black and white sesame seeds, and soy chili glaze',
        price: 22.99,
    },
    {
        id: 'id4',
        name: 'Mystery Box',
        restaurant: "Paulie Gee's Logan Square",
        description: 'Help reduce food waste by ordering this mystery grab bag at a discounted price!!',
        price: 15.99,
    },
    {
        id: 'id5',
        name: 'Pistachio Pesto',
        restaurant: 'Coalfire',
        description: 'pistachio pesto, mozzarella, crumbled berkshire sausage, stracciatella, clover honey',
        price: 22.99,
    },
    {
        id: 'id6',
        name: 'Mystery Box',
        restaurant: 'Coalfire',
        description: 'Help reduce food waste by ordering this mystery grab bag at a discounted price!',
        price: 15.99,
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