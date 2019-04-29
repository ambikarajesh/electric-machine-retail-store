import React, { Component } from 'react';
import FormField from '../utils/FormField';
import {connect} from 'react-redux';
import {updateInput, generateData, validateForm} from '../utils/formAction';
import {userRegister} from '../../store/actions/user';
import {withRouter} from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
class Register extends Component {
    state={
        formError:true,
        formSuccess:false,
        formErrorMsg:'',
        formdata:{
            firstname:{
                element:'input',
                value:"",
                config:{
                    name:'firstname_input',
                    type:'text',
                    placeholder:'Enter your firstname'
                },
                validation:{
                    required:true
                },
                valid:false,
                touched:false,
                validationMsg:""
            },
            lastname:{
                element:'input',
                value:"",
                config:{
                    name:'lastname_input',
                    type:'text',
                    placeholder:'Enter your lastname'
                },
                validation:{
                    required:true
                },
                valid:false,
                touched:false,
                validationMsg:""
            },
            email:{
                element:'input',
                value:"",
                config:{
                    name:'email_input',
                    type:'email',
                    placeholder:'Enter your email'
                },
                validation:{
                    required:true,
                    email:true
                },
                valid:false,
                touched:false,
                validationMsg:""
            },
            password:{
                element:'input',
                value:"",
                config:{
                    name:'password_input',
                    type:'password',
                    placeholder:'Enter your password'
                },
                validation:{
                    required:true,
                    password:true
                },
                valid:false,
                touched:false,
                validationMsg:""
            },
            confirmPassword:{
                element:'input',
                value:"",
                config:{
                    name:'confirmPassword_input',
                    type:'password',
                    placeholder:'Enter your confirm password'
                },
                validation:{
                    required:true,
                    confirmPassword:true
                },
                valid:false,
                touched:false,
                validationMsg:""
            }
        }
    }
    inputHandler = (element) => {
            const updateFormdata = updateInput(element, this.state.formdata, 'register')
        this.setState({
            formdata:updateFormdata
        })
    }
    submitHandler= (event) => {
        event.preventDefault();
        const data = generateData(this.state.formdata)
        const validForm = validateForm(this.state.formdata)
        if(validForm){
            this.props.dispatch(userRegister(data)).then(res=>{
                if(res.payload.status === '00'){
                    this.setState({formError:false, formSuccess:true})
                    setTimeout(()=>{
                        this.props.history.push('/register_login')
                    }, 3000);
                }else{
                    this.setState({formError:false});
                }
            }).catch(err=>{
                this.setState({formError:false});
            })
            
        }else{
            this.setState({formError:false});
        }
    }
    render() {
        return (
            <div className='page_wrapper'>
                <div className='container'>
                    <div className='register_login_container'>
                        <div className='left'>
                            <form onSubmit={this.submitHandler} >
                                <h2>Personal Information</h2>
                                <div className='form_block_two'>
                                    <div className='block'>
                                        <FormField
                                        id={'firstname'}
                                        formdata={this.state.formdata.firstname}
                                        change={(element) => this.inputHandler(element)}
                                        />
                                    </div>
                                    <div className='block'>
                                        <FormField
                                        id={'lastname'}
                                        formdata={this.state.formdata.lastname}
                                        change={(element) => this.inputHandler(element)}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <FormField
                                        id={'email'}
                                        formdata={this.state.formdata.email}
                                        change={(element) => this.inputHandler(element)}
                                        />
                                </div>
                                <h2>Account Information</h2>
                                <h2>Verify Password</h2>
                                <div className='form_block_two'>
                                    <div className='block'>
                                        <FormField
                                        id={'password'}
                                        formdata={this.state.formdata.password}
                                        change={(element) => this.inputHandler(element)}
                                        />
                                    </div>
                                    <div className='block'>
                                        <FormField
                                        id={'confirmPassword'}
                                        formdata={this.state.formdata.confirmPassword}
                                        change={(element) => this.inputHandler(element)}
                                        />
                                    </div>
                                </div>                                    
                                <button onClick={this.submitHandler}>Create an Account</button>                                                                                
                            </form>
                        </div>
                    </div>
                </div>
                <Dialog open = {this.state.formSuccess}>
                    <div className='dialog_alert'>
                        <div>Congratulation !!!</div>
                        <div>You will be redirected to Login in an couple of seconds...</div>
                    </div>
                </Dialog>
            </div>
        );
    }
}


export default connect()(withRouter(Register));