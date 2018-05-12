import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => (
<div className="right-content">
  <div className="popular">
    <h3>Popular Videos</h3>
    <p><img src="/images/l1.png" title="likes" /> 10,000</p>
    <div className="clear"> </div>
  </div>
  <div className="grid1">
    <h3>Consectetur adipisicing elit</h3>
    <a href="#"><img src="/images/g7.jpg" title="video-name" /></a>
    <div className="time1">
      <span>2:50</span>
    </div>
    
    <div className="grid-info">
      <div className="video-share">
        <ul>
          <li><a href="#"><img src="/images/likes.png" title="links" /></a></li>
          <li><a href="#"><img src="/images/link.png" title="Link" /></a></li>
          <li><a href="#"><img src="/images/views.png" title="Views" /></a></li>
        </ul>
      </div>
      <div className="video-watch">
        <a href="#">Watch Now</a>
      </div>
      <div className="clear"> </div>
      <div className="lables">
        <p>Labels:<a href="#">Lorem</a></p>
      </div>
    </div>
  </div>
  <div className="clear"> </div>
  <div className="Recent-Vodeos">
    <h3>Recent-Videos</h3>
    <div className="video1">
      <img src="/images/r1.jpg" title="video2" />
      <span>Lorem ipsum dolor sit amet,</span>
      <p>s consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
      <div className="clear"> </div>
    </div>
    <div className="video1 video2">
      <img src="/images/r2.jpg" title="video2" />
      <span>Lorem ipsum dolor sit amet,</span>
      <p>s consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
      <div className="clear"> </div>
    </div>
    <div className="r-all">
      <a href="#">View All</a>
    </div>
  </div>
</div>
)

export default Sidebar