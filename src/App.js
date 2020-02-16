import React from 'react'
import{Switch, Route} from 'react-router-dom';
import {Home} from './pages/Home'
import Profile from './pages/Profile'
import News from './pages/News'
import Login from './pages/Login'
import Logout from './pages/Logout'


export const App=()=>{
  return (
      <div className="container pt-4">
        <Switch>
          <Route path="/news" component={News} />
          <Route
                  path="/login"
                  render={() => (
                    <Login/>
                  )}/>
          <Route
                  path="/logout"
                  render={() => (
                    <Logout/>
                  )}/>
               
          <Route
                  path="/profile"
                  render={() => (
                    <Profile/>
                  )}/>
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
  );
}



