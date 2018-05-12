import React from 'react';
import { Link } from 'react-router-dom'

const Social = () => (
  <div className="viwes">
    <div className="view-links">
      <ul>
        <li><h4>Share on:</h4></li>
        <li><Link to="#"><img src="/images/f1.png" title="facebook" /></Link></li>
        <li><Link to="#"><img src="/images/t1.png" title="Twitter" /></Link></li>
        <li><Link to="#"><img src="/images/s1.png" title="Google+" /></Link></li>
      </ul>
      <ul className="comment1">
        <li><Link to="#">Comment(1)</Link></li>
        <li><Link to="#"><img src="/images/re.png" title="report" /><span>Report</span></Link></li>
      </ul>
    </div>
    <div className="views-count">
      <p><span>2,500</span> Views</p>
    </div>
    <div className="clear"> </div>
  </div>
);

export default Social;