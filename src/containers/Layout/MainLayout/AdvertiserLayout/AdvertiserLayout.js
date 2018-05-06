import React from 'react';
import classes from './AdvertiserLayout.css';

const AdvertiserLayout = (props) => {
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

    const other = {

        backgroundColor : '#ecffdc',
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
                    <center><h5>View Profile</h5></center>
                </div>
                <div style={honeydew} className="col-sm-3">
                    <center><h5>View Other</h5></center>
                </div>
                <div style={other} className="col-sm-6">
                    <center><h5>Post Review</h5></center>
                </div>
            </div>

        </div>
    )
}

export default AdvertiserLayout;