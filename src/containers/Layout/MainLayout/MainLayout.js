import React,{Component} from "react";
import Eux from "../../../hoc/Eux/Eux";
import AdminNavbar from "../../../components/Navbar/AdminNavbar/AdminNavbar";
import InfluencerNavbar from "../../../components/Navbar/InfluencerNavbar/InfluencerNavbar";
import AdvertiserNavbar from "../../../components/Navbar/AdvertiserNavbar/AdvertiserNavbar";
import Footer from "../../../components/Footer/Footer";
import CommonLayout from "./CommonLayout/CommonLayout";
import InfluencerLayout from "./InfluencerLayout/InfluencerLayout";
import AdvertiserLayout from "./AdvertiserLayout/AdvertiserLayout";
import AdminLayout from "./AdminLayout/AdminLayout";
import NavBar from "../../../components/Navbar/MainNavbar/NavBar";

class MainLayout extends Component{

    render(){



        let layout = null;

        if(this.props.layoutType.commonLayout){

            layout = <div>
                        <NavBar />
                        <CommonLayout userClick={this.props.userClick}
                                      adminClick={this.props.adminClick}
                                      advertiserClick={this.props.advertiserClick}

                                      influencerLoginModalShow={this.props.influencerLoginModalShow}
                                      advertiserLoginModalShow={this.props.advertiserLoginModalShow}

                        />
                        <Footer />
                    </div>

        }else if(this.props.layoutType.adminLayout){

            layout = <div>
                <AdminNavbar />
                <AdminLayout />
                <Footer />
            </div>

        }else if(this.props.layoutType.advertiserLayout){

                layout = <div>

                    <AdvertiserLayout />
                    <AdvertiserNavbar />
                    <Footer />
                </div>

        }else if(this.props.layoutType.userLayout) {

            layout = <div>

                <InfluencerLayout/>
                <InfluencerNavbar/>
                <Footer/>
            </div>


        }


        return(

            <Eux>
                <main>
                    {layout}
                </main>
            </Eux>
        )
    }


}

export default MainLayout;