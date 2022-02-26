import { React, Fragment } from "react";
import ItemsSummary from './ItemsSummary';
import AvailableItems from './AvailableItems';

import classes from './Items.module.css';

const Items = () => {
    return (
        <>
            <ItemsSummary />
            <AvailableItems />
        </>
    );
};

export default Items;