import React,{Component} from 'react';
import Eux from "../../hoc/Eux/Eux";
import StartUI from "../../components/UI/BodyContent/StartUI";

class BodyController extends Component{


    render(){

        let bodyContent = null;

        if(this.props.layoutType.commonLayout){

            bodyContent = <StartUI
                userClick={this.props.userClick}
                adminClick={this.props.adminClick}
                advertiserClick={this.props.advertiserClick} />

        }else if(this.props.layoutType.adminLayout){

            bodyContent = <StartUI
                userClick={this.props.userClick}
                adminClick={this.props.adminClick}
                advertiserClick={this.props.advertiserClick} />

        }else if(this.props.layoutType.advertiserLayout){

            bodyContent = <StartUI
                userClick={this.props.userClick}
                adminClick={this.props.adminClick}
                advertiserClick={this.props.advertiserClick} />

        }else if(this.props.layoutType.userLayout){

            bodyContent = <StartUI
                userClick={this.props.userClick}
                adminClick={this.props.adminClick}
                advertiserClick={this.props.advertiserClick} />

        }else{
            bodyContent = <StartUI
                userClick={this.props.userClick}
                adminClick={this.props.adminClick}
                advertiserClick={this.props.advertiserClick} />
        }


        return(
            <Eux>
                {bodyContent}
            </Eux>
        )
    }
}

export default BodyController;