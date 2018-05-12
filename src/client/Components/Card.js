import React from 'react';
import { Link } from 'react-router-dom'
// import Model from './Model';

const Card = ({ data, ...props }) => (
  <div className={props.className ? props.className : `col-md-4 col-sm-6`}>
    <div className="card bg-light text-center mb-4">
      <div className="card-body p-0">
        <img src="/images/g7.jpg" className="img-fluid" alt="video"/>
      </div> 
      <div className="card-footer">
        <span><i className="fa fa-play-circle fa-4x"></i></span>
      </div>
    </div>
  </div>
)

export default Card;