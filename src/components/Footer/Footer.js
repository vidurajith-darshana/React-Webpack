import React, {Component} from 'react';
import classes from  './Footer.css';
import { Col, Container, Row, Footer } from 'mdbreact';
import FontAwesome from "../UI/Common/FontAwesome/FontAwesome";
class FooterPage extends Component{


    render(){
        return(
            <div className={classes.ftrDiv}>
                <Footer color="blue" className="font-small pt-4 mt-4">
                    <Container className="text-left">
                        <Row>
                            <Col sm="4">
                                <h6 className="title">SOCIAL VALUE</h6>
                                <br/>
                                <small>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer </small>
                            </Col>
                            <Col sm="4">

                                <ul>
                                    <h6  className="title">OUR STUDIO</h6>
                                    <br/>

                                    <div className="form-group row">
                                        <div className="col-sm-1"><FontAwesome name="fa fa-map-marker"/></div>
                                        <div className="col-sm-10"><li className="list-unstyled"><small> 	Suite 741 ,585 Little Collins Street,
                                            Melbourne VIC 3000 </small></li>
                                        </div>

                                    </div>

                                    <div className="form-group row">
                                        <div className="col-sm-1"><FontAwesome name="fa fa-phone"/></div>
                                        <div className="col-sm-10"><li className="list-unstyled"><small> (+61) 416192293
                                             </small></li>
                                        </div>

                                    </div>

                                    <div className="form-group row">
                                        <div className="col-sm-1"><FontAwesome name="fa fa-envelope-o"/></div>
                                        <div className="col-sm-10"><li className="list-unstyled"><small> (+61) 416192293
                                        </small></li>
                                        </div>

                                    </div>


                                </ul>
                            </Col>
                            <Col sm="4">
                                <h6 className="title">STAY IN TOUCH</h6>
                                <br/>
                                <small>Subscribe to our newsletters to stay updated</small>
                                    {/*<input type="text" placeholder="Enter your email" className="footer-input" style={{backgroundColor:"gray"}}/>*/}
                                {/*<TextField type="email" placeholder="Enter your email"/>*/}

                                    <label className="sr-only" htmlFor="inlineFormInputGroup">Username</label>
                                    <div className="input-group mb-2">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">@</div>
                                        </div>
                                        <input type="text" className="form-control" id="inlineFormInputGroup"
                                               placeholder="Enter your email" style={{backgroundColor:'#424242',color:'white',borderRadius:'1px',border:'#424242'}}/>

                                    </div>
                                <br/>
                                Develop by: <a href="http://www.ceyentra.com" target="_blank" rel="noopener noreferrer"  style={{color:'white'}}> Ceyentra Technologies </a>


                            </Col>
                        </Row>
                    </Container>
                    <br />
                    <div className="footer-copyright text-center">
                        Develop by: <a href="http://www.ceyentra.com" target="_blank" rel="noopener noreferrer"  style={{color:'white'}}> Diamot </a>

                    </div>
                </Footer>
            </div>
        );
    }
}
export default FooterPage;