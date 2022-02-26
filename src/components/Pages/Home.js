import { React } from 'react';

import classes from './Home.module.css';

function Home() {
    return (
        <>
            <div className={classes['content']}>
                <div className={classes['home-content']}>
                <p>It’s no secret that the pandemic has taken a toll on the restaurant industry. As of late 2021, nearly 19% of Chicago restaurants had closed since the start of the pandemic.
Life is Pizza aims to alleviate some of the financial stressors Chicago pizza restaurants are facing by providing them a platform to share their story & sell program-exclusive pizzas. If you are interested in supporting local businesses and eating delicious pizza while you’re at it, look no further!</p>
                </div>
            </div>
        </>
    );
}

export default Home;