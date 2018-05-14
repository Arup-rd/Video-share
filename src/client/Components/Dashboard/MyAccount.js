import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import Row from '../Row';
import CounterCard from '../Homepage/CounterCard';
import Axios from 'axios';
import conf from '../../config';
import { MyImage, MyVideo } from '../../Actions/content';

class MyAccount extends React.Component{

  componentDidMount(){
    Axios.get(`${conf.server}/api/content/image`).then((res) => {
      this.setState({
        data: res.data
      })
      this.props.MyImage(res.data);      
    }).catch((e) => {
      console.log(e);
      this.setState({
        data: undefined
      })
    })

    Axios.get(`${conf.server}/api/content/video`).then((res) => {
      this.setState({
        data: res.data
      })
      this.props.MyVideo(res.data);
    }).catch((e) => {
      console.log(e);
      this.setState({
        data: undefined
      })
    })
  }

  render(){
    const { images, videos } = this.props;
    return (
      <div className="col-md-9 myAccount">
        <Row>
            <Link to="/myaccount/images" className="col-md-4">
              <CounterCard className="bg-blue" icon="images" title="Number of Images" to={images && images.length}/>
            </Link>
            <Link to="/myaccount/videos" className="col-md-4">
              <CounterCard className="bg-blue" icon="video" title="Number of Videos" to={videos && videos.length}/>
            </Link>
            <Link to="/myaccount/post" className="col-md-4">
              <CounterCard className="bg-blue" icon="plus" title="Add New Content" to={false}/>
            </Link>
        </Row>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  images: state.content.images,
  videos: state.content.videos
})

const mapDispatchToProps = (dispatch) => ({
  MyVideo: (data) => (dispatch(MyVideo(data))),
  MyImage: (data) => (dispatch(MyImage(data)))
})

export default connect(mapStateToProps, mapDispatchToProps)(MyAccount);