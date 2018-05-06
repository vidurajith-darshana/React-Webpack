import React from 'react';

const FontAwesome = (props) => (

    <i className={props.name} aria-hidden="true" onClick={props.onClick} style={{
        color:props.color,
        fontSize: props.size,
        fontWeight: props.fontWeight
    }}>{props.children}
    </i>

);

export default FontAwesome;