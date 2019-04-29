import React, { Component } from 'react';
import MyButton from '../utils/MyButton';
import Login from '../Login';
class Register_Login extends Component {
    render() {
        return (
            <div className='page_wrapper'>
                <div className='container'>
                    <div className='register_login_container'>
                        <div className='left'>
                            <h1>New Customer</h1>
                            <p>Welcome to our Seeds family! We look forward to continuing to serve your appliances needs through our online services.</p>
                            <MyButton type='default' title='Create an Account' linkTo='/register' styles={{margin:'10px 0 0 0'}}/>
                        </div>
                        <div className='right'>
                            <h1>Registered Customers</h1>
                            <p>If you have an account please log in.</p>
                            <Login/>
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Register_Login;