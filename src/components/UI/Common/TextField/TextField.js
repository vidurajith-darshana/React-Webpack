import React,{Component} from 'react';
import classes from './TextField.css';

// const style=['btn',classes["form-control"]].join(' ');
const style=['btn',classes["form-control"]].join(' ');

class TextField extends Component{


    render(){
        return(
            <div>


                <input type={this.props.type} className={style} placeholder={this.props.placeholder}/>
                {/*<input*/}
                    {/*style={props.style}*/}
                    {/*disabled={props.disabled}*/}
                    {/*className="form-control"*/}
                    {/*value={props.value}*/}
                    {/*placeholder={props.placeholder}*/}
                    {/*onChange={props.changed}/>*/}
            </div>
        );
    }
}




export default TextField;
