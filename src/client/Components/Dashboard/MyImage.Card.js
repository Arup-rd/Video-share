import React from 'react';
import Row from '../Row';

class MyImageCard extends React.Component{
  render(){
    return (
      <div className="col-md-4 mb-3">
        <div className="card">
          <div className="card-body p-0">
            <img src="/images/g5.jpg" className="img-fluid"/>
          </div>
        </div>
      </div>
    )
  }
}

export default MyImageCard;