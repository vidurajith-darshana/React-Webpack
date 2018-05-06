import React, { Component } from 'react';
import './App.css';
// var Eux = require('../hoc/Eux/Eux');
import Eux from "./hoc/Eux/Eux";
import MainLayout from "./containers/Layout/MainLayout/MainLayout";
import AdvertiserLogin from "./components/UI/Modal/AdvertiserModal/AdvertiserLogin/AdvertiserLogin";
import AdvertiserInterest from "./components/UI/Modal/AdvertiserModal/AdvertiserInterest/AdvertiserInterest";
import InfluencerLogin from "./components/UI/Modal/InfluencerModal/InfluencerLogin/InfluencerLogin";
import Modal from "./components/UI/Modal/Modal";
import InfluencerSocialAccount from "./components/UI/Modal/InfluencerModal/InfluencerSocialAccount/InfluencerSocialAccount";
import InfluencerDoneRequest from "./components/UI/Modal/InfluencerModal/InfluencerDoneRequest/InfluencerDoneRequest";
import AdvertiserDoneRequest from "./components/UI/Modal/AdvertiserModal/AdvertiserDoneRequest/AdvertiserDoneRequest";



class App extends Component {

    state = {
        layoutType: {

            adminLayout: false,
            userLayout: false,
            advertiserLayout: false,
            commonLayout: true,

        },
        advertiserLoginModal: false,
        influencerLoginModal: false,
        advertiserInterestModal: false,
        influencerSocialAccountModal: false,
        influencerDoneRequestModal: false,
        advertiserDoneRequestModal: false,
        onScroll: false,
        i: 0,
    }


    InfluencerSocialAccountModalHandler = () => {
        this.setState({

            influencerLoginModal: false,
            advertiserLoginModal: false,
            advertiserInterestModal: false,
            influencerSocialAccountModal: true,
            influencerDoneRequestModal: false,
            advertiserDoneRequestModal: false
        })
    };

    AdvertiserLoginModalHandler = () => {
        this.setState({
            influencerLoginModal: false,
            advertiserLoginModal: true,
            advertiserInterestModal: false,
            influencerSocialAccountModal: false,
            influencerDoneRequestModal: false,
            advertiserDoneRequestModal: false
        })
    };

    InfluencerLoginModalHandler = () => {
        this.setState({
            influencerLoginModal: true,
            advertiserLoginModal: false,
            advertiserInterestModal: false,
            influencerSocialAccountModal: false,
            influencerDoneRequestModal: false,
            advertiserDoneRequestModal: false
        })
    };

    AdvertiserInterestModalHandler = () => {
        this.setState({
            influencerLoginModal: false,
            advertiserLoginModal: false,
            advertiserInterestModal: true,
            influencerSocialAccountModal: false,
            influencerDoneRequestModal: false,
            advertiserDoneRequestModal: false
        })
    };

    InfluencerDoneRequestModalHandler = () => {
        this.setState({
            influencerLoginModal: false,
            advertiserLoginModal: false,
            advertiserInterestModal: false,
            influencerSocialAccountModal: false,
            influencerDoneRequestModal: true,
            advertiserDoneRequestModal: false
        })
    };

    AdvertiserDoneRequestModalHandler = () => {
        this.setState({
            influencerLoginModal: false,
            advertiserLoginModal: false,
            advertiserInterestModal: false,
            influencerSocialAccountModal: false,
            influencerDoneRequestModal: false,
            advertiserDoneRequestModal: true
        })
    };
    userHandler = () => {

        const layout={
            ...this.state.layoutType
        }

        layout.userLayout=true;
        layout.adminLayout=false;
        layout.advertiserLayout=false;
        layout.commonLayout=false;

        this.setState({
            layoutType: layout,
            influencerLoginModal: true
        })


    }
    adminHandler = () => {
        const layout={
            ...this.props.layoutRed
        }

        layout.userLayout=false;
        layout.adminLayout=true;
        layout.advertiserLayout=false;
        layout.commonLayout=false;

        this.setState({
            layoutType: layout
        })


    }

    advertiserHandler = () => {
        const layout={
            ...this.props.layoutRed
        }

        layout.userLayout=false;
        layout.adminLayout=false;
        layout.advertiserLayout=true;
        layout.commonLayout=false;


        this.setState({
            layoutType: layout,
            advertiserLoginModal: true
        })

    }

    modalCloseHandler = () => {
        this.setState({
            advertiserLoginModal: false,
            influencerLoginModal: false,
            advertiserInterestModal: false,
            influencerSocialAccountModal: false,
            influencerDoneRequestModal: false,
            advertiserDoneRequestModal: false

        })
    }

    render() {
        let showModal = null;
        if(this.state.influencerLoginModal){
            showModal= <Modal modalClosed={null} show={true} >
                <InfluencerLogin
                    modalClosed={this.modalCloseHandler}
                    influencerSocialAccountModalShow={this.InfluencerSocialAccountModalHandler}


                />
            </Modal>

        }else if(this.state.advertiserLoginModal){
            showModal= <Modal show={true} modalClosed={null}>
                <AdvertiserLogin
                    modalClosed={this.modalCloseHandler}
                    advertiserInterestModalShow={this.AdvertiserInterestModalHandler}

                />
            </Modal>

        }else if(this.state.advertiserInterestModal){
            showModal= <Modal modalClosed={null} height="580px" top="5%" show={true} >
                <AdvertiserInterest
                    modalClosed={this.modalCloseHandler}
                    advertiserDoneRequestModalShow={this.AdvertiserDoneRequestModalHandler}

                />
            </Modal>
        }else if(this.state.influencerSocialAccountModal){
            showModal= <Modal show={true} modalClosed={null} height="480px"  top="12%">
                <InfluencerSocialAccount
                    modalClosed={this.modalCloseHandler}
                    influencerDoneRequestModalShow={this.InfluencerDoneRequestModalHandler}
                    // advertiserInterestModalShow={this.AdvertiserInterestModalHandler}

                />
            </Modal>
        }else if(this.state.influencerDoneRequestModal){
            showModal= <Modal show={true} modalClosed={null} black="true">
                <InfluencerDoneRequest
                    modalClosed={this.modalCloseHandler}
                    // advertiserInterestModalShow={this.AdvertiserInterestModalHandler}

                />
            </Modal>
        }else if(this.state.advertiserDoneRequestModal){
            showModal= <Modal show={true} modalClosed={null} black="true">
                <AdvertiserDoneRequest
                    modalClosed={this.modalCloseHandler}
                    // advertiserInterestModalShow={this.AdvertiserInterestModalHandler}

                />
            </Modal>
        }



        return (
            <Eux>

                <MainLayout layoutType={this.state.layoutType}
                            advertiserModalShow={this.state.advertiserLoginModal}
                            influencerModalShow={this.state.influencerLoginModal}

                            advertiserInterestModalShow={this.AdvertiserInterestModalHandler}
                            influencerLoginModalShow={this.InfluencerLoginModalHandler}
                            advertiserLoginModalShow={this.AdvertiserLoginModalHandler}

                            modalClosed={this.modalCloseHandler}
                            userClick={this.userHandler}
                            adminClick={this.adminHandler}
                            advertiserClick={this.advertiserHandler}
                >
                </MainLayout>

                {/*show modal one by one*/}
                {showModal}

            </Eux>

        );
    }
}


export default App;
