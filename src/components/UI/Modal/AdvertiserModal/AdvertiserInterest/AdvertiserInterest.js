import React from 'react';
import CheckBox from "../../../Common/CheckBox/CheckBox";
import Logo from '../../../../../assest/images/AdvertiserInterest.jpg';
import TextField from "../../../Common/TextField/TextField";
import Button from "../../../Common/Button/Button";
import FontAwesome from "../../../Common/FontAwesome/FontAwesome";
// import Chips from "../../../Common/Chips/Chips";

const AdvertiserInterest = (props) => (
    <div>
        <div className="row">
            <div className="col-sm-6" >
                {/*<TextField  placeholder="okk" />*/}
                <small style={{color:'black'}}>Welcome back!</small>
                <br/><br/>
                <center><img src={Logo} alt="AdvertiserInterest" /></center>
                <br/><br/><br/>
                <small style={{color:'#00C853'}}>Curious what is this?</small>
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
                <h6 style={{color:'#E0E0E0'}}>Your Interests</h6>
                <hr style={{backgroundColor:'#E0E0E0'}}></hr>
                <div className="row">
                    <div className="col-sm-4">

                        <CheckBox id="check1">Marketing</CheckBox>
                        <CheckBox id="check2">Culture</CheckBox>
                        <CheckBox id="check3">Logistics</CheckBox>

                    </div>
                    {/*style={{backgroundColor:'blue'}}*/}
                    <div className="col-sm-5" >
                        <CheckBox id="check4">Entrepreneurship</CheckBox>
                        <CheckBox id="check5">Photography</CheckBox>
                        <CheckBox id="check6">Entertainment</CheckBox>

                    </div>

                    <div className="col-sm-3">
                        <CheckBox id="check7">Sports</CheckBox>
                        <CheckBox id="check8">Travel</CheckBox>
                        <CheckBox id="check9">Music</CheckBox>
                    </div>
                </div>

                <br /><br />
                <h6 style={{color:'#E0E0E0'}}>Business Information</h6>
                <hr style={{backgroundColor:'#E0E0E0'}}></hr>

                <hr/>

                <TextField  placeholder="Office Location"/>
                <br />
                <TextField placeholder="Business Website"/>
                <br />

                <Button isDisable="false"  onClick={props.advertiserDoneRequestModalShow} className="btn btn-success" >GET STARTED</Button>
                <br /><br />

            </div>

        </div>
    </div>

);

export default AdvertiserInterest;