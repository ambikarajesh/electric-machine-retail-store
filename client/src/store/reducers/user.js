import * as actionTypes from '../types';
const initialState = {

}

const reducer = (state={initialState}, action) =>{
    switch(action.type){
        case actionTypes.REGISTER_USER:
            return {...state, register:action.payload}
        case actionTypes.LOGIN_USER:
            return {...state, loginSuccess:action.payload}
        default:
            return state;
    }
}

export default reducer;