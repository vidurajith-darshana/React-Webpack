import React from 'react';
import classes from './AdminNavbar.css'

const AdminNavbar = () => {

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
                Navbar admin content
            </nav>
        </div>
    )
}
export default AdminNavbar;