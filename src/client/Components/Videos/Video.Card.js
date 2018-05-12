import React from 'react';
import Row from '../Row';

class VideoCard extends React.Component{
  render(){
    return (
      <div className="col-md-4 mb-3">
        <div className="card">
          <div className="card-body p-0">
            <img src="/images/g5.jpg" className="img-fluid"/>
          </div>
          <div className="card-footer">
            <div className="d-flex flex-row">
              <div className="d-flex">
                <div className="px-2"><i className="fas fa-play float-left"></i></div>
              </div>
                
              <div className="progress w-75">
                <div className="progress-bar bg-success" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <div className="d-flex">
                <div className="px-2"><i className="fas fa-volume-up"></i></div>
                <div className="px-2"><i className="fas fa-expand"></i></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default VideoCard;