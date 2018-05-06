import React,{Component} from 'react';
import classes from './CommonLayout.css';
import Logo from '../../../../assest/images/about_banner.png';
import Button from "../../../../components/UI/Common/Button/Button";
import socialValue from  '../../../../assest/images/logo_back_dark.png';
import ScrollableAnchor from 'react-scrollable-anchor';
// import Footer from "../../../../components/Footer/Footer";

const style = {
    backgroundColor:'#424242',
    borderRadius:'25px',
    color: '#EEEEEE'

}

const divStyle = {
    backgroundImage: 'url(../Content/images/home_back.png)',
    backgroundSize: 'contain',
    // height: '600px',
    backgroundRepeat: 'no-repeat',
    backgroundPositionX: 'center'
}



// const  CommonLayout =(props) => {
class CommonLayout extends Component{
    state = {

        email : '',
        isEmail: true,

    };

    shouldComponentUpdate(nextProps,nextState){
        return (this.state.isEmail !== nextState.isEmail) || (this.state.email!==nextState.email);
    }




    render() {

        if(this.state.email !== ''){

            console.log(this.state.email);
            // this.setState({isEmail:true});
            // this.emailHandler();


        }else{

            // this.setState({isEmail:false});

        }

        return (

            <div className={classes.MainDiv}>

                <div className="row" style={{
                    zIndex: '10',
                    backgroundColor: '#212121',
                    paddingTop: '100px',
                    marginLeft: '0',
                    marginRight: '0',
                    width: '100%',
                    height: '100%'
                }}>
                    <br/>
                    <div className="col-sm-6">
                        {/*<h4 style={{color:'gray'}}>Social Value</h4>*/}
                        <img style={{width: '25%'}} src={socialValue} alt="Spider2"/>
                        {/*<h6 style={{color:'gray'}}>Marketing</h6>*/}
                        {/*<img style={{width:'100%'}} src={Logo} alt="Spider1"/>*/}

                        <div className="my-auto home-header-anim" style={divStyle}>
                            <img style={{width: '100%', zIndex: '-10'}} alt="logo" src={Logo}/>
                        </div>


                    </div>
                    <div className="col-sm-6" style={{color: 'white', marginLeft: '0', marginRight: '0'}}>
                        <div className="animated bounce">
                            <h6 style={{fontSize: '23px', color: '#BDBDBD'}}><b
                                style={{color: '#EEEEEE'}}>Simple</b> and <b style={{color: '#EEEEEE'}}>powerful</b> way
                                to send your message to your target </h6>
                            <br/>
                            <div className="row">
                                <div className="col-sm-6">
                                    {/*<Button className="btn btn-outline btn-xl js-scroll-trigger home-btn-getstarted" href="#howitworks" isWidth="" width="35%" backgroundColor="white" color="GRAY" className="btn btn-default" > GET STARTED </Button>*/}
                                    <a style={style}
                                       className="btn btn-outline btn-xl js-scroll-trigger home-btn-getstarted"
                                       href="#howitworks"> GET STARTED </a>

                                </div>
                                <div className="col-sm-6">

                                </div>
                            </div>


                            <br/><br/>
                            <h6 style={{fontSize: '20px', color: '#BDBDBD'}}>Have Connections ? Sign up for a free
                                account to be a messenger and get PAID for your social strength. </h6>
                        </div>
                    </div>
                </div>

                {/*----------------------------------------------------------------------------*/}
                {/*<section className="howitworks" id="howitworks">*/}
                <ScrollableAnchor id={'howitworks'}>
                    <div className="row" style={{marginLeft: '0', marginRight: '0', marginTop: '50px'}}>
                        <div className="col-sm-3">
                        </div>

                        <div className="col-sm-6" style={{marginTop: '50px'}}>
                            <center>
                                <h3>How it works</h3>
                                <h6 style={{color: 'gray'}}>Lets ask from George</h6></center>
                        </div>

                        <div className="col-sm-3">
                        </div>

                    </div>
                    {/*</section>*/}
                </ScrollableAnchor>

                <br/><br/>

                {/* ------------------------------------  how it works this ----------------------------------------- */}


                <div className="row" style={{marginLeft: '0', marginRight: '0'}}>


                    <div className="col-sm-1">
                    </div>
                    <div className="col-sm-5" style={{color: '#757575'}}>

                        <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book. It has survived not only five
                            centuries, but also the leap into electronic typesetting, remaining essentially
                            unchanged.<br/><br/> It was popularised in the 1960s with the release of Letraset sheets
                            containing Lorem Ipsum passages,.

                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer </h6>

                    </div>

                    <div className="col-sm-5" style={{color: '#757575'}}>
                        <center>
                            <iframe width="100%" height="215"
                                    src="https://www.youtube.com/embed/tgbNymZ7vqY" title="video">
                            </iframe>
                        </center>
                    </div>
                    <div className="col-sm-1">
                    </div>

                </div>


                <br/><br/>


                {/*------------------------------------------------ implementation ------------------------------------------------ */}
                {/*<section className="register" id="register">*/}
                <ScrollableAnchor id={'register'}>
                    <div className="row" style={{marginLeft: '0', marginRight: '0', top: '20px'}}>
                        <br/><br/>
                        <div className="col-sm-2">
                        </div>
                        <br/><br/>
                        <div className="col-sm-8" style={{color: '#757575', marginTop: '50px'}}>
                            <center>
                                <p style={{fontSize: '34px'}}>Diamot is invitation only (at this stage)</p>
                                <small>Enter your email and give some information about you. We will reach you soon.
                                </small>
                                <br/><br/>
                                <div>
                                    <input onChange={(event) => this.setState({email:event.target.value})} value={this.state.email} style={{borderRadius: '25px', height: '50px'}} id="emailText"
                                           className="form-control" type="email" placeholder="Enter your email"/>
                                    <br/>
                                    {/* this is a recaptcha */}
                                    <div className="g-recaptcha"
                                         data-sitekey="6Lfy1VQUAAAAALjIsYi8b79AdDwJT8t-TXk1xT-N"></div>
                                </div>
                                <br/><br/><br/>
                                <div className="row">
                                    {/*<div style={{height:'700px'}}/>*/}

                                    <div className="col-sm-6">
                                        <Button  isBackgroundColor="true" isEmail={this.state.isEmail} isHeight="true" height="50px" btnType="button" className="btn btn-dark"
                                                onClick={this.props.influencerLoginModalShow}>I'm a Influencer</Button>
                                        {/*<button onClick={props.influencerLoginModalShow} style={{width:'300px',borderRadius:'35px',height:'52px'}} type="button" className="btn btn-dark">Iam a Influencer</button>*/}
                                    </div>
                                    <div className="col-sm-6">
                                        <Button isBackgroundColor="true" isEmail={this.state.isEmail} isHeight="true" height="50px" className="btn btn-dark"
                                                onClick={this.props.advertiserLoginModalShow}>I'm an Advertiser</Button>
                                        {/*<button onClick={props.advertiserLoginModalShow} style={{width:'300px',borderRadius:'35px',height:'52px'}} type="button" className="btn btn-dark">Iam an Advertiser</button>*/}
                                    </div>
                                </div>

                            </center>

                        </div>


                        <div className="col-sm-2">
                        </div>


                    </div>

                </ScrollableAnchor>
                <br/><br/>


            </div>

        )
    }
};

export default CommonLayout;