import React from 'react';
import FontAwesome from "../../../Common/FontAwesome/FontAwesome";
import Button from "../../../Common/Button/Button";
import classes from './AdvertiserDoneRequest.css';

const AdvertiserDoneRequest = (props) => (
    <div className={classes.divBody}>
        <center>

            <FontAwesome size="5.5em" name="fa fa-check-circle fa-5x" color="#424242"/>
            <br /><br />
            <h4>Hello!</h4>
            <br />
            <h6>We receive your request</h6>
            <h6>hold on until <span style={{color:'#BDBDBD'}}>Diamot</span> admin will contact you.</h6>
            <br /><br />
            <Button isDisable="false" isWidth={true} width="50%" onClick={props.modalClosed} className="btn btn-success">OKAY</Button>
        </center>
    </div>
);

export default AdvertiserDoneRequest;