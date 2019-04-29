import * as actionTypes from '../types';
const initialState = {

}

const reducer = (state={initialState}, action) =>{
    switch(action.type){
        case actionTypes.LOGIN_USER:
            return {...state, loginSuccess:action.payload}
        default:
            return state;
    }
}

export default reducer;