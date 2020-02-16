import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector  } from 'react-redux';
import {loginUser} from '../store/actions/authActions';
import { withRouter } from 'react-router'

const Login=(props)=>{
   
    const[loginField, setLoginField]=useState("");
    const[passwordField, setPasswordField]=useState("");
    const userType = useSelector(state => state.authReducer.userType);
    const dispatch = useDispatch();
    const users=[
      { id: 1, login:"admin", password:"12345" },
      { id: 2, login:"user", password:"12345" }
    ];
  
    useEffect(() => {
     if(userType) 
     props.history.push('/profile')
    })

      const submitHandler = (e) => {
      e.preventDefault();
      users.map((user)=>{
       if(user.login===loginField && user.password===passwordField){
        dispatch(loginUser(user.login));
       }
      })
      }
      
    return (
      <div className="row">
          <form className="card p-3 mx-auto col-md-6" onSubmit={submitHandler}>
          <h2 className="text-center">Login page</h2>

          <div className="form-group">
            <label htmlFor="login">Login</label>
            <input type="text" 
             className="form-control"
             value={loginField}
             onChange={e=>setLoginField(e.target.value)}
             name="login"/>
             </div>

             <div className="form-group"> 
             <label htmlFor="password">Password</label>
            <input type="password"
             className="form-control"
             value={passwordField}
             onChange={e=>setPasswordField(e.target.value)}
             name="password"/>
            </div>
              <button type="submit" className="btn btn-primary btn-lg">
                Submit
              </button>
          </form>
        </div>
     
    )}

export default withRouter(Login);