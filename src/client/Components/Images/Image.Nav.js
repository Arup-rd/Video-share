import React from 'react';
import { NavLink } from 'react-router-dom'

class ImageNav extends React.Component{

  render(){
    return (
      <ul className="nav nav-pills nav-stacked">
        <li className="nav-item">
          <NavLink className="nav-link text-dark" to="#">Real Estate</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-dark" to="#">Education</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-dark" to="#">Entertainment</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-dark" to="#">Health/Fitness</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-dark" to="#">Entertainment</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-dark" to="#">IT/Technology</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-dark" to="#">Finance/Investment</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-dark" to="#">Others</NavLink>
        </li>
      </ul>
    )
  }
}

export default (ImageNav)

