import React, { useState } from 'react';
import Modal from 'react-modal';

import classes from './Map.module.css';
import pizza from '../../assets/pizzaria.png';
import bebu from '../../assets/pizzaplace.jpg'
import paulie from '../../assets/pizzaplace2.jpg'
import coalfire from '../../assets/pizzaplace3.jpg'
import Coalfire from '../../assets/Coalfire.jpg'
import Bebu from '../../assets/bebu.png'
import Paulie from '../../assets/paulie.png'

const modalStyling = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-20%',
        transform: 'translate(-50%, -50%)',
        zIndex: 10,
        padding: '5%',
    },
}

function Map() {

    const [hover, setState] = useState(false);
    const [hover2, setState2] = useState(false);
    const [hover3, setState3] = useState(false);

    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalIsOpen2, setIsOpen2] = useState(false);
    const [modalIsOpen3, setIsOpen3] = useState(false);

    function closeModal() {
        setIsOpen(false)
        setIsOpen2(false)
        setIsOpen3(false)
    }

    return (
        <>
            <div className={classes.map}>
                <div className={classes.bebu} onMouseOver={() => setState(true)} onMouseOut={() => setState(false)} onClick={() => setIsOpen(true)}>
                    <img className={classes.pizza} src={pizza}></img>
                    {hover ? (<img className={classes.popUp} src={bebu} />) : null}
                </div>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    ariaHideApp={false}
                    style={modalStyling}
                    contentLabel="Example Modal"
                >
                    <div className={classes.modalContainer}>
                        <h2>Pizzeria Bebu</h2>
                        <img className={classes.images} src={Bebu}></img>
                        <div className={classes.modalContent}>Husband and wife duo Zach and Rachel Smith have created a pizzeria that feels like home. Unfortunately, due to the pandemic, they had to make the difficult choice to close their restaurant temporarily. A small family business, Pizzeria Bebu is looking to support their team during this challenging time. </div>
                        <button className={classes.modalButton} onClick={closeModal}>Close</button>
                    </div>
                </Modal>

                <div className={classes.paulie} onMouseOver={() => setState2(true)} onMouseOut={() => setState2(false)} onClick={() => setIsOpen2(true)}>
                    <img className={classes.pizza} src={pizza}></img>
                    {hover2 ? (<img className={classes.popUp} src={paulie} />) : null}
                </div>
                <Modal
                    isOpen={modalIsOpen2}
                    onRequestClose={closeModal}
                    style={modalStyling}
                    contentLabel="Example Modal"
                >
                    <div className={classes.modalContainer}>
                        <h2>Paulie Gee's Logan Square</h2>
                        <img className={classes.images} src={Paulie}></img>
                        <div className={classes.modalContent}>Paulie Gee’s has locations from New York City to New Orleans, but this family-owned location has had its ups and downs since the start of the pandemic. Regardless, they have continued to support their staff & friends by hosting weekly artisan markets, raised money for select charities, and kept their staff safe by modifying their service during the most grueling parts of the pandemic. </div>
                        <button className={classes.modalButton} onClick={closeModal}>Close</button>
                    </div>
                </Modal>

                <div className={classes.coalfire} onMouseOver={() => setState3(true)} onMouseOut={() => setState3(false)} onClick={() => setIsOpen3(true)}>
                    <img className={classes.pizza} src={pizza}></img>
                    {hover3 ? (<img className={classes.popUp} src={coalfire} />) : null}
                </div>
                <Modal
                    isOpen={modalIsOpen3}
                    onRequestClose={closeModal}
                    style={modalStyling}
                    contentLabel="Example Modal"
                >
                    <div className={classes.modalContainer}>
                        <h2>Coalfire</h2>
                        <img className={classes.images} src={Coalfire}></img>
                        <div className={classes.modalContent}>Serving up their own style of pizza, coal-fired in a 1500 degree oven, Coalfire pizza has had a difficult time during the pandemic. From staffing shortages to the threat of third-party delivery services, it has been a battle to persist through the past few years. </div>
                        <button className={classes.modalButton} onClick={closeModal}>Close</button>
                    </div>
                </Modal>

            </div>
        </>
    )
}

export default Map;
