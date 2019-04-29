import React, { Component } from 'react';
import FormField from '../utils/FormField';
import {connect} from 'react-redux';
import {updateInput, generateData, validateForm} from '../utils/formAction';
import {userLogin} from '../../store/actions/user';
import {withRouter} from 'react-router-dom'
class Login extends Component {
    state={
        formError:true,
        formErrorMsg:'',
        formdata:{
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
            }
        }
    }
    inputHandler = (element) => {
            const updateFormdata = updateInput(element, this.state.formdata, 'input')
        this.setState({
            formdata:updateFormdata
        })
    }
    submitHandler= (event) => {
        event.preventDefault();
        const data = generateData(this.state.formdata)
        const validForm = validateForm(this.state.formdata)
        if(validForm){
            this.props.loginUser(data).then(res=>{
                console.log(res)
                if(res.payload.status==='00'){
                    this.props.history.push('/products');
                }else{
                    this.setState({formError:false, formErrorMsg:res.payload.response.data.message})
                }
            })
        }else{
            this.setState({formError:validForm ? true : false});
        }
    }
    render() {
        return (
            <div className='signin_wrapper'>
               <form onSubmit={this.submitHandler} >
                    {!this.state.formError ? <div className='error_label'>{this.state.formErrorMsg? this.state.formErrorMsg: 'Please Complete the Input field without Error!!!'}</div> : null}
                    <FormField
                    id={'email'}
                    formdata={this.state.formdata.email}
                    change={(element) => this.inputHandler(element)}
                    />
                    <FormField
                    id={'password'}
                    formdata={this.state.formdata.password}
                    change={(element) => this.inputHandler(element)}
                    />
                    <button onClick={this.submitHandler}>Login</button>
                                                                
               </form>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        loginUser : (data) => dispatch(userLogin(data))
    }

}

export default connect(null, mapDispatchToProps)(withRouter(Login));