import React from 'react';
import { Link } from 'react-router-dom'
// import Model from './Model';

const Card = ({ data }) => (
  <div className="card bg-light text-center mb-4">
    <div className="card-body">
      <h3>{data ? data.firstName + ' ' + data.lastName : 'No Title'}</h3>
      <p className="text-secondary">{data ? data.email : 'No Email'}</p>
    </div> 
    <div className="card-footer">
      <button type="button" className="btn btn-primary" data-toggle="modal" data-target={data ? `#${data._id}`: 'No date'}>
      View Details 
    </button>
    </div>
  </div>
)

export default Card;