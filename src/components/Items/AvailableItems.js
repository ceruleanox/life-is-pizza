import { useEffect, useState } from 'react';

import Card from '../UI/Card';
import PizzaItem from './PizzaItem/PizzaItem';
import classes from './AvailableItems.module.css';

/*

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
*/

const AvailableItems = () => {

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState();

    useEffect(() => {
        const fetchItems = async() => {
            const response = await fetch('https://life-is-pizza-default-rtdb.firebaseio.com/items.json');
            
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const responseData = await response.json();

            const loadedItems = [];
            
            for (const key in responseData) {
                loadedItems.push({
                    id: key,
                    name: responseData[key].name,
                    description: responseData[key].description,
                    restaurant: responseData[key].restaurant,
                    price: responseData[key].price
                });
            }
            setItems(loadedItems);
            setIsLoading(false);
        };

        fetchItems().catch(error => {
            setIsLoading(false);
            setHttpError(error.message);
        });

    }, []);
    
    if (isLoading) {
        return (
            <section className={classes.ItemsLoading}>
                <p>Loading...</p>
            </section>
        );
    }

    if (httpError) {
        return (
            <section className={classes.ItemsError}>
                <p>{httpError}</p>
            </section>
        );
    }

//    const itemsList = PIZZA_ITEMS.map((item) => ( 
    const itemsList = items.map((item) => ( 
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