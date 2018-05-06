import React from 'react';
import classes from './AdvertiserNavbar.css'

const AdvertiserNavbar = () => {

    const style = {
        position: 'fixed',
        left: 0,
        top: 0,
        width: '100%',

        color: 'white',


        backgroundColor: 'black',
    }

    return(
        <div className={classes.mainDiv}>
            <nav className="navbar navbar-light" style={style}>
                Navbar advertiser content
            </nav>
        </div>
    )
}
export default AdvertiserNavbar;