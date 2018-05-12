import React from 'react';
import { Link } from 'react-router-dom'
import Axios from 'axios';
import { connect } from 'react-redux';
import { deleteContent } from '../../Actions/content';

const Grid = ({ content, ...props }) => (
  <div className="grid">
  <h3>{content.title ? content.title : 'Untitled'}
  {props.isUser && <button className="btn btn-danger float-right" onClick={(e) => {
    e.preventDefault();
    props.deleteItem(content._id);
  }}><i className="fa fa-trash"></i></button> }
  </h3>
  <Link to={`/single/${content._id}`}>
    <div id="grid-thumb">
      {content.parmalink ? 
        // console.log(`/${content.parmalink}`)
        <img src={content.parmalink} title={content.title} /> 
        :
        <img src="/images/g1 copy.png" title="video-name" />
      }
    </div>
  </Link>
  <div className="time">
    <span>00:10</span>
  </div>
  <div className="grid-info">
    <div className="video-share">
      <ul>
        <li><Link to="#"><img src="/images/likes.png" title="links" /></Link></li>
        <li><Link to="#"><img src="/images/link.png" title="Link" /></Link></li>
        <li><Link to="#"><img src="/images/views.png" title="Views" /></Link></li>
      </ul>
    </div>
    <div className="video-watch">
      <Link to="single.html">Watch Now</Link>
    </div>
    <div className="clear"> </div>
    <div className="lables">
      <p>Labels:<Link to="categories.html">Lorem</Link></p>
    </div>
  </div>
</div>
)

export default (Grid);

