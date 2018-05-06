import React from 'react';
import classes from './CheckBox.css';
const CheckBox = (props) => (

    <div style={{marginTop:'2%'}}>
            <section>
                <input type="checkbox" name="radio" id={props.id}  className={classes.radio}  />
                <label htmlFor={props.id}>{props.children}</label>
            </section>
    </div>
);

export default CheckBox;