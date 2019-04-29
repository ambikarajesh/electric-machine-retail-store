import {USER_SERVER} from '../../components/utils/misc';
import * as actionTypes from '../types';
import axios from 'axios'
export const userRegister = (data) =>{
    const req = axios.post(`${USER_SERVER}/register`, data).then(res=>res.data);
    return {
        type:actionTypes.REGISTER_USER,
        payload:req
    }
}
export const userLogin = (data)=>{
    const req = axios.post(`${USER_SERVER}/login`, data).then(res=>res.data);
    return {
        type:actionTypes.LOGIN_USER,
        payload:req
    }
}