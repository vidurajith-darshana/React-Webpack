import React from 'react';
import classes from './MainNavbar.css'

const MainNavbar = () => {

    // const style = {
    //     position: 'fixed',
    //     left: 0,
    //     top: 0,
    //     width: '100%',
    //
    //     color: '#BDBDBD',
    //
    //     height :'50px',
    //     backgroundColor: '#212121',
    //     zIndex: '5000'
    // }

    return(
        <div className={classes.mainDiv}>
            {/*<nav className="navbar navbar-light" style={style}>*/}
                {/*<div className="row">*/}
                    {/*<div className="col-sm-12">*/}
                    {/*</div>*/}

                {/*</div>*/}

                {/*<div className="row">*/}
                    {/*<div className="col-sm-1">*/}

                    {/*</div>*/}
                    {/*<div className="col-sm-5">*/}
                        {/*<h6>HOW IT WORKS</h6>*/}
                    {/*</div>*/}
                    {/*<div className="col-sm-3">*/}
                        {/*<h6>REGISTER</h6>*/}
                    {/*</div>*/}
                    {/*<div className="col-sm-3">*/}
                        {/*<h6>SIGN IN</h6>*/}
                    {/*</div>*/}
                {/*</div>*/}

            {/*</nav>*/}
            <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav" style={{display:"",backgroundColor:'#212121'}}>
                <div className="container">
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                            data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                            aria-label="Toggle navigation" style={{color:"#BDBDBD"}}>
                        Menu
                        <i className="fa fa-bars" style={{color:"#BDBDBD"}}></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive" style={{color:"#BDBDBD"}}>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger"  style={{color:"#BDBDBD"}}>HOW IT WORKS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" style={{color:"#BDBDBD"}}>REGISTER</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" style={{color:"#BDBDBD"}}>SIGN IN</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default MainNavbar;