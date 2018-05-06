import React from 'react';

import classes from './Modal.css';
import Eux from '../../../hoc/Eux/Eux';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => (
    <Eux>
        <Backdrop show={props.show} clicked={props.modalClosed} />
            {/*<div className="animated bounce">*/}
            <center>
                <div
                    className={classes.Modal}
                    style={{
                        height:props.height,

                        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: props.show ? '1' : '0',
                        borderRadius: '15px',
                        top: props.top,
                        width: props.width ,
                        background: props.black ? '#212121' : '',
                        zIndex: '10000'
                    }}>
                    {props.children}
                </div>
            </center>
    </Eux>
);

export default modal;