import React from 'react';
import { Link } from 'react-router-dom'
import Social from './Single.Social';

const SingleContent = ({ single }) => (
<section>
  <div className="title">
    <h3>{single.title ? single.title : 'Untitled'}</h3>
    <ul>
      <li><h4>By:</h4></li>
      <li><Link to="#">{single.author ? single.author.username : 'Admin'}</Link></li>
      <li>
        <Link to="#">
          <img src="/images/sub.png" title="subscribe" />subscribe
        </Link>
      </li>
    </ul>
  </div>
  <div className="video-inner">
    <Link to="#">
      {single.parmalink ?
        <img src={single.parmalink} title={single.title} />
      :
        <img src="/images/b11.png" title="videoname" />
      }
      <span>10:00</span>
    </Link>
  </div>
  <Social/>
  <div className="clear"> </div>
  <div className="video-details">
    <ul>
      <li><p>Uploaded on <Link to="#">June 21, 2013</Link> by <Link to="#">Lorem</Link></p></li>
      <li><span>{single.description ? single.description : 'No Description'}</span></li>
    </ul>
    <ul className="other-links">
      <li><Link to="#">youtube.com/videos-tube</Link></li>
      <li><Link to="#">facebook.com/videos-tube</Link></li>
      <li><Link to="#">Twitter.com/videos-tube</Link></li>
    </ul>
  </div>
  <div className="clear"> </div>
  <div className="tags">
    <ul>
      <li><h3>Tags:</h3></li>
      <li><Link to="#">Games</Link> ,</li>
      <li><Link to="#">HD-Videos</Link></li>
    </ul>
  </div> 
</section>
)

export default SingleContent