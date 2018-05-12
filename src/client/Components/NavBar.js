import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
<div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <NavLink activeClassName="active" className="nav-link" to="/" exact={true}>Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="active" className="nav-link" to="/videos">Videos</NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="active" className="nav-link" to="/images">Images</NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="active" className="nav-link" to="/blog">Blog</NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="active" className="nav-link" to="/about">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="active" className="nav-link" to="/contact">Contact</NavLink>
      </li>
    </ul>
    <button className="btn btn-outline-success my-2 my-sm-0">Want Personalised Content?</button>
  </div>
);

export default NavBar;
