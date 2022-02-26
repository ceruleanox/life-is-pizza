import React from 'react';

import classes from './Footer.module.css';

import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

function Footer() {
    return (
        <div className={classes.footer}>
            <div className={classes.socialMedia}>
                <FaInstagram />
                <FaTwitter />
                <FaFacebookF />
            </div>
            <p>&copy; 2022 lifeispizza.com</p>
        </div>
    )
}

export default Footer
