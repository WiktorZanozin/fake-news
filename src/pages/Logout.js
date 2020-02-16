import React, {useEffect} from 'react'
import { useDispatch} from 'react-redux';
import {logoutUser} from '../store/actions/authActions';
import { Redirect } from 'react-router-dom';

const Logout=()=>{
  const dispatch = useDispatch(); 
  useEffect(()=>{
    dispatch(logoutUser())
  });  
  return(
  <Redirect to='/' />
  )
}

export default Logout;