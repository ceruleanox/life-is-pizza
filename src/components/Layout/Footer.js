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
            
        </div>
    )
}

export default Footer
