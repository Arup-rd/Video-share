import React from 'react';
import { NavLink } from 'react-router-dom'

const DashboardSidebar = () => (
  <div className="col-md-3">
    <div className="card mb-3">
      <div className="card-header text-center">
        My Download
      </div>
      <div className="card-body">
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink activeClassName="active" to="/myaccount/downloads/images" className="nav-link text-info"><i className="fa fa-images"></i> Images</NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="active" to="/myaccount/downloads/videos" className="nav-link text-info"><i className="fa fa-video"></i> Videos</NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="active" to="/myaccount/downloads/memes" className="nav-link text-info"><i className="fa fa-leaf"></i> Memes</NavLink>
          </li>
        </ul>
      </div>
    </div>

    <div className="card mb-3">
      <div className="card-header text-center">
        My Order
      </div>
      <div className="card-body">
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink activeClassName="active" to="/myaccount/orders/images" className="nav-link text-info"><i className="fa fa-images"></i> Images</NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="active" to="/myaccount/orders/videos" className="nav-link text-info"><i className="fa fa-video"></i> Videos</NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="active" to="/myaccount/orders/memes" className="nav-link text-info"><i className="fa fa-leaf"></i> Memes</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
)

export default DashboardSidebar;