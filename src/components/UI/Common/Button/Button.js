import React from 'react';

import './Button.css';

const button = (props) => (

        <button type={props.btnType} className={props.className} onClick={props.onClick} style={{
            width: props.isWidth ? props.width : '100%',
            borderRadius:'25px',
            height: props.isHeight ? props.height:'45px',
            backgroundColor: props.isBackgroundColor ? props.backgroundColor : '#00C853' ,
            borderColor: props.isBackgroundColor ? props.backgroundColor : '#00C853',
            color: props.color
        }} disabled={props.isDisable} >{props.children}</button>

);

export default button;