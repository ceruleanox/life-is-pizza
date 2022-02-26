import { React } from 'react';

import classes from './Home.module.css';

function Home() {
    return (
        <>
            <div className={classes['content']}>
                <div className={classes['home-content']}>
                    This is the Home component (src/pages/home)
                </div>
            </div>
        </>
    );
}

export default Home;