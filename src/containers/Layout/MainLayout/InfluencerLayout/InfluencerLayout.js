import React from 'react';
import classes from './InfluencerLayout.css';

const InfluencerLayout = (props) => {

    const lightcyan = {

        backgroundColor : 'lightcyan',
        height: '600px',
        marginTop: '10px',
        marginBottom: '50px',
        zIndex:'0',
        padding: '10%'

    }

    const honeydew = {

        backgroundColor : 'honeydew',
        height: '600px',
        marginTop: '10px',
        marginBottom: '50px',
        zIndex:'0',
        padding: '10%'

    }

    return(
        <div className={classes.mainDiv}>
            <div className="row">
                <div style={lightcyan} className="col-sm-3">
                    <center><h5>View Reviews</h5></center>
                </div>
                <div style={honeydew} className="col-sm-9">
                    <center><h5>View Request</h5></center>
                </div>
            </div>

        </div>
    )
}

export default InfluencerLayout;
