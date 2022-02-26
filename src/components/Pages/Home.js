import { React } from 'react';
import Map from '../Layout/Map'

import classes from './Home.module.css';

function Home() {
    return (
        <>
            <div className={classes['content']}>
                <div className={classes['home-content']}>
                    This is the Home component (src/pages/home)
                    <div className='mission-statement'>
                        <p>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."                        </p>
                        <Map />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;