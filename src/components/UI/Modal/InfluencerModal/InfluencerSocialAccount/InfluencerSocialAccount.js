import React from 'react';
import socialMedia from '../../../../../assest/images/social-media.png';
import TextField from "../../../Common/TextField/TextField";
import Button from "../../../Common/Button/Button";
import FontAwesome from "../../../Common/FontAwesome/FontAwesome";

const InfluencerSocialAccount = (props) => (
    <div>
        <div className="row">
            <div className="col-sm-5" style={{backgroundRepeat:'no-repeat',backgroundSize:'contain'}}>

                <small style={{color: 'black'}}>Sync your social links,</small>
                <br/><br />
                <center>
                    <img src={socialMedia} alt="socialMedia"/></center>

                <small style={{color: '#00C853'}}>Curious what is this?</small>

            </div>
            <div className="col-sm-1" >
                <center>

                    <FontAwesome name="fa fa-facebook-square fa-3x" color="#EEEEEE" />
                    <br /><br />
                    <FontAwesome name="fa fa-linkedin-square fa-3x" color="#EEEEEE"/>
                    <br /><br />
                    <FontAwesome name="fa fa-instagram fa-3x" color="#EEEEEE"/>
                    <br /><br />
                    <FontAwesome name="fa fa-twitter-square fa-3x" color="#EEEEEE"/>
                    <br /><br />
                    <FontAwesome name="fa fa-youtube-square fa-3x" color="#EEEEEE"/>
                </center>
            </div>

            <div className="col-sm-6">
                {/*close button in modal*/}

                <div className="row">
                    <div className="col-sm-11">
                    </div>
                    <div className="col-sm-1">
                        <div style={{marginRight: '0px', marginTop: '-20px'}}>
                            <FontAwesome onClick={props.modalClosed} name="fa fa-times-circle fa-2x"
                                         color="white"/>
                            {/*style={{right:'0px',top:'0px',position:'relative'}}*/}
                        </div>
                    </div>
                </div>
                {/*--------------------*/}

                <TextField type="text" placeholder="Facebook username"/>
                <br />
                <TextField type="text" placeholder="Instagram username"/>
                <br />
                <TextField type="text" placeholder="Linkedin username"/>
                <br />
                <TextField type="text" placeholder="Twitter username"/>
                <br />
                <TextField type="text" placeholder="Youtube username"/>

                <br /> <br />
                <Button isDisable="false" onClick={props.influencerDoneRequestModalShow} className="btn btn-success">SYNC</Button>
                <br />
                <center><small style={{color:'white'}}>Skip this</small></center>
            </div>
        </div>
    </div>

);

export default InfluencerSocialAccount;