import React from 'react';
import classes from './StartUI.css';
import Textarea from "react-textarea-autosize";


const StartUI =(props) => {
    return(
        <div>
            <div className={classes.MainDiv}>

                <div className={classes.divBody}>

                    {/*this is body content*/}
                    <center>
                        <h3>Diamot is invitation only ( at this stage )</h3>


                        <small>Enter your email and give some information about you. We will reach you soon.</small>
                        <br/><br/>
                        <div style={{width:'500px'}}>
                            <input style={{borderRadius:'18px', height:'50px'}} id="emailText" className="form-control" type="text" placeholder="Enter your email"/>



                        <img style={{width:'200px',height:'70px'}} src='http://localhost:3000/assest/images/recaptcha.jpg' alt=''/>
                        </div>
                            <br/><br/><br/>
                        <div style={{width:'600px'}} className="row">
                            {/*<div style={{height:'700px'}}/>*/}

                            <div className="col-sm-6">
                                <button onClick={props.advertiserClick} style={{width:'400px',borderRadius:'25px',height:'42px'}} type="button" className="btn btn-dark">Iam an Advertiser</button>
                            </div>

                            <div className="col-sm-6">
                                <button onClick={props.userClick} style={{width:'400px',borderRadius:'25px',height:'42px'}} type="button" className="btn btn-dark">Iam a Influencder</button>
                            </div>

                        </div>



                    </center>
                </div>

            </div>

           {/*<Footer />*/}
        </div>
    )
}

export default StartUI;