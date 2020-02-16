import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'


 const Navbar = (props) => (
  <nav className="navbar navbar-expand-md navbar-dark bg-primary mb-3">
    <div className="container">
    <div className="navbar-brand">
      Fake-news
    </div>
    <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarNav"
    aria-controls="navbarNav"
    aria-expanded="false"
    aria-label="Toggle-navigation">
    <span className="navbar-toggler-icon"/>
    </button>
    <div className="collapse navbar-collapse">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
      <NavLink to="/" className="nav-link">Home</NavLink>
      </li>
      <li className="nav-item">
      <NavLink to="/news" className="nav-link">News</NavLink>
      </li>
      </ul>
      <ul className="navbar-nav">
      {props.userType?(
      <li className="nav-item">
        <NavLink to="/profile" className="nav-link">Welcome, {props.userType}</NavLink>
      </li>):null}
      {props.userType?(
      <li className="nav-item">
      <NavLink to="/logout" className="nav-link">Logout</NavLink>
      </li>):
      <li className="nav-item">
      <NavLink to="/login" className="nav-link">Login</NavLink>
      </li>}
      </ul>
    </div>
    </div>
  </nav>
)

const mapStateToProps = (state) => {
  return {
    userType: state.authReducer.userType
  };
};
export default connect(mapStateToProps)(Navbar);