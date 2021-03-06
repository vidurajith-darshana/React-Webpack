import React , {Component } from 'react';
import InfluencerLoginLogo from '../../../../../assest/images/InfluencerLogin.png';
import TextField from "../../../Common/TextField/TextField";
import classes from './InfluencerLogin.css';
import Button from "../../../Common/Button/Button";
import FontAwesome from "../../../Common/FontAwesome/FontAwesome";

class InfluencerLogin extends Component{


    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-sm-6">

                        <small style={{color:'black'}}>Hey there! Welcome back,</small>
                        <br />
                        <center><img src={InfluencerLoginLogo} alt="InfluencerLoginLogo" /></center>
                        <br /><br /><br />

                           <small className={classes.smallSignUp} onClick={this.props.influencerSocialAccountModalShow} >Don't have an account? click here to sign up</small>

                    </div>

                    <div className="col-sm-6">
                        <div className="row">
                            <div className="col-sm-11">
                            </div>
                            <div className="col-sm-1">
                                <div style={{marginRight:'0px',marginTop:'-20px'}}>
                                    <FontAwesome onClick={this.props.modalClosed} name="fa fa-times-circle fa-2x" color="white"/>
                                    {/*style={{right:'0px',top:'0px',position:'relative'}}*/}
                                </div>
                            </div>
                        </div>
                        <center>
                            <br /><br />
                            <TextField type="text" placeholder="Username"/>
                            <br />
                            <TextField type="password" placeholder="Username"/><br /><br /><br />


                            <Button isDisable="false" className="btn btn-success" >SIGN IN </Button>
                            <br /><br />

                            <small style={{color:'white'}}>Forget password ?</small>

                        </center>
                    </div>
                </div>
            </div>
        );
    }
}

export default InfluencerLogin;