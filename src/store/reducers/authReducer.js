import * as actions from '../actions'

const initialState={
    userType:null,
}

export default(state=initialState, action)=>{
    switch(action.type){
        case actions.LOGIN_USER:
            return{userType:action.payload}

        case actions.LOGOUT_USER:
            return{userType:null}
            default :
            return state;
    }

}