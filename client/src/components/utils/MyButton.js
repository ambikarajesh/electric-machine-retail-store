import React from 'react';
import {Link} from 'react-router-dom'
const MyButton = (props) => {
    const button = () =>{
        let template = '';
        switch(props.type){
            case 'default':
                template = <Link to ={props.linkTo} className= "link_default" {...props.styles}>{props.title}</Link>;
                break;
            
            default:
                template='';
        }
        return template;
    }
    return (
        <div className='my_link'>
            {button()}
        </div>
    );
};

export default MyButton;