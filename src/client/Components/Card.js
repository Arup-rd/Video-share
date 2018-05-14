import React from 'react';
import { Link } from 'react-router-dom'
// import Model from './Model';
import { Player } from 'video-react';

const Card = ({ data, ...props }) => (
  <div className={props.className ? props.className : `col-md-4 col-sm-6 thumbnail`}>
    {data && data.contentType.toLowerCase() === 'video' ?         
      <div className="card bg-light text-center mb-4">
        <div className="card-body p-0">
          <Player
            fluid={true}
            playsInline={false}
            src={data && data.file ? data.file.permalink : 'No Video Available'}
            startTime={5}
            player={false}
            aspectRatio={'16:9'}
          />
          {/* <video width="100%" height="180px" controls>
            <source src="/uploads/John-Legend-Love-Me-Now.MP4" type="video/mp4"/>
            <source src="/uploads/John-Legend-Love-Me-Now.ogg" type="video/ogg"/>
          </video> */}
        </div> 
        <Link to={`/videos/${data && data._id}`}>
          <div className="card-footer">
            <span><i className="fa fa-play-circle fa-4x"></i></span>
          </div>
        </Link>
      </div>
      :       
      <div className="card bg-light text-center mb-4 image-card">
        <div className="card-body p-0">
          <img src={data && data.file ? data.file.permalink : '/images/default.svg'} className="img-fluid" alt="video"/>
        </div> 
        <Link to={`/images/${ data && data._id}`}>
          <div className="card-footer">
            <span><i className="fa fa-bars fa-4x"></i></span>
          </div>
        </Link>
      </div>
    }
    {props.permitted && 
    <button 
      className="btn btn-danger" 
      id="deleteBtn"
      onClick={() => {
        props.deleteItem(data._id)
      }}
    ><i className="fa fa-2x fa-trash"></i></button>}
  </div>
)

export default Card;
