import { React } from 'react';

import classes from './About.module.css';

function About() {
    return (
        <>
            <div className={classes['content']}>
                <div className={classes['about-content']}>
                    This is the About component (src/pages/about)
                </div>
            </div>
        </>

    );
}

export default About;