import { useRef, useState } from 'react';

import classes from './Checkout.module.css';

const isEmpty = value => value.trim() === '';
const isFiveChars = value => value.trim().length === 5;

const Checkout = (props) => {
    const [formInputsValidity, setFormInputsValidity] = useState({
        name: true, 
        street: true, 
        zipcode: true, 
        city: true
    });

    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const zipcodeInputRef = useRef();
    const cityInputRef = useRef();

    const confirmHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredZipcode = zipcodeInputRef.current.value;
        const enteredCity = cityInputRef.current.value;

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredStreetIsValid = !isEmpty(enteredStreet);
        const enteredCityIsValid = !isEmpty(enteredCity);
        const enteredZipcodeIsValid = isFiveChars(enteredZipcode);

        setFormInputsValidity({
            name: enteredNameIsValid,
            street: enteredStreetIsValid,
            city: enteredCityIsValid,
            zipcode: enteredZipcodeIsValid
        });

        const formIsValid = enteredNameIsValid && enteredStreetIsValid && enteredCityIsValid && enteredZipcodeIsValid;

        if (!formIsValid) {
            return;
        }

        props.onConfirm({
            name: enteredName,
            street: enteredStreet,
            city: enteredCity,
            zipcode: enteredZipcode
        });
    };


    
    const nameControlClasses = `${classes.control} ${formInputsValidity.name ? '' : classes.invalid}`;
    const streetControlClasses = `${classes.control} ${formInputsValidity.street ? '' : classes.invalid}`;
    const zipcodeControlClasses = `${classes.control} ${formInputsValidity.zipcode ? '' : classes.invalid}`;
    const cityControlClasses = `${classes.control} ${formInputsValidity.city ? '' : classes.invalid}`;
    

    return (
        <form onSubmit={confirmHandler}>
            <div className={nameControlClasses}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' ref={nameInputRef}/>
                {!formInputsValidity.name && <p className={classes.invalidTxt}>Please enter a valid name!</p>}
            </div>    
            <div className={streetControlClasses}>
                <label htmlFor='name'>Street</label>
                <input type='text' id='street' ref={streetInputRef}/>
                {!formInputsValidity.street && <p className={classes.invalidTxt}>Please enter a valid street!</p>}
            </div>    
            <div className={zipcodeControlClasses}>
                <label htmlFor='zipcode'>Zip Code</label>
                <input type='text' id='zipcode' ref={zipcodeInputRef}/>
                {!formInputsValidity.zipcode && <p className={classes.invalidTxt}>Please enter a valid zip code (5 characters long)!</p>}
            </div>    
            <div className={cityControlClasses}>
                <label htmlFor='city'>City</label>
                <input type='text' id='city' ref={cityInputRef}/>
                {!formInputsValidity.city && <p className={classes.invalidTxt}>Please enter a valid city!</p>}
            </div>    
            <div className={classes.actions}>
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button>Confirm</button>
            </div>
        </form>
    );
};

export default Checkout;