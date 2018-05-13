import React from 'react';
import { Link, Redirect } from 'react-router-dom'
import Social from './Single.Social';
import Container from '../Container';
import Row from '../Row';

import {
  FacebookShareButton,
  GooglePlusShareButton,
  TwitterShareButton,
  FacebookIcon,
  GooglePlusIcon,
  TwitterIcon
} from 'react-share'
import { Player } from 'video-react';
import FacebookShareCount from 'react-share/lib/FacebookShareCount';
import conf from '../../config';
import Download from '@axetroy/react-download';



const SingleContent = ({ single, ...props }) => (
  <div className="col-md-8">
    <Row className=" bg-white"> 
      <div className="col-md-12 title">
        <h3 className="py-2">{single.title}</h3>
      </div>
      
      <div className="col-md-12 video-inner" disabled>
        {single && single.contentType.toLowerCase() === 'video' ?         
        <Player
          fluid
          playsInline={false}
          src={single && single.file.permalink ? single.file.permalink : 'No Video Available'}
          startTime={0}
        />
        :       
        <img src={single && single.file ? single.file.permalink : '/images/default.svg'} className="img-fluid w-100" alt="video" />
        } 
      </div> 
      <div className="col-md-12 has-border-bottom  py-3">
        <Row>  
          <div className="col-md-8 view">
            <ul>
              <li><i className="fa fa-eye"></i> {single.views} Views</li>
              <li><i className="fa fa-share-alt"></i> 
                <FacebookShareCount 
                  url={`${conf.server}/${props.shareLink}`}
                /> Shares</li>
            </ul>
          </div> 
          <div className="col-md-4" >
            <FacebookShareButton
              url={`${conf.server}/${props.shareLink}`}
              quote={single.title}
              className="float-right ml-1">
              <FacebookIcon
                size={32}
                round/>
            </FacebookShareButton>
            <GooglePlusShareButton
              url={`${conf.server}/${props.shareLink}`}
              quote={single.title}
              className="float-right ml-1">
              <GooglePlusIcon
                size={32}
                round />
            </GooglePlusShareButton>
            <TwitterShareButton
              url={`${conf.server}/${props.shareLink}`}
              quote={single.title}
              className="float-right ml-1">
              <TwitterIcon
                size={32}
                round />
            </TwitterShareButton>
          </div>
        </Row>
      </div>
      <div className="col-md-12 video-details py-3">
        <p>{single.description}</p>
      </div>
    </Row>
    <Row>
      <div className="tags col-md-12 my-3 py-3">
        <ul>
          <li id="noback"><strong>Tags: </strong></li>
          {single.tags.map((tag, key) => <li key={key}>{tag}</li> )}
        </ul>
      </div>
    </Row> 
    <Download file={single.file.permalink} content="Video Sharing">
      <button className="btn btn-2x btn-pri" onClick={() => {

      }}>
      Download Now</button>
    </Download>
</div>
)

export default SingleContent