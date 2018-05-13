import React from 'react';
import { NavLink } from 'react-router-dom'

const DashboardSidebar = () => (
  <div className="col-md-3">
    <div className="card mb-3">
      <div className="card-header text-center">
        My Account
      </div>
      <div className="card-body">
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink activeClassName="active" to="/myaccount" className="nav-link text-info"><i className="fa fa-info"></i> My Account</NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="active" to="/myaccount/post" className="nav-link text-info"><i className="fa fa-plus"></i> Add New</NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="active" to="/myaccount/images" className="nav-link text-info"><i className="fa fa-images"></i> Images</NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="active" to="/myaccount/videos" className="nav-link text-info"><i className="fa fa-video"></i> Videos</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
)

export default DashboardSidebar;