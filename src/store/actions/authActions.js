import * as actions from './index'

export const loginUser=(payload)=>{
    return{
        type: actions.LOGIN_USER,
        payload
    };
};
export const logoutUser=()=>{
    
    return{
        type: actions.LOGOUT_USER
    };
};

export const setUser=(userType)=>{
    return{
        type: actions.LOGIN_USER,
        userType
    };
};