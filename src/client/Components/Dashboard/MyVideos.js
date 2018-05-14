import React from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import Row from '../Row';
import Loader from '../Loader';
import conf from '../../config';
import Card from '../Card';
import { MyVideo, DeleteVideo } from '../../Actions/content';

class MyVideos extends React.Component{
  state = {
    data: false
  }
  componentDidMount(){
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

  DeleteVideo = (id) => {
    Axios.delete(`${conf.server}/api/content/${id}`, {
      headers: {
        'authorization': localStorage.getItem('auth')
      }
    }).then((res) => {
      this.props.DeleteVideo(id);
    }).catch((e) => {
      console.log(e)
    })
  }

  
  render(){
    return (
      <div className="col-md-9">
      {this.props.videos &&
        <Row>
          {this.props.videos.slice(0, 12).map((video) => {
            return (
              <Card 
                key={video._id} 
                data={video} 
                permitted={true}
                deleteItem={this.DeleteVideo}
              />
            )

          })}
        </Row>
      }
      {!this.state.data && this.state.data != undefined && <Loader/>}
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  videos: state.content.videos
})
const mapDispatchToProps = (dispatch) => ({
  MyVideo: (data) => (dispatch(MyVideo(data))),
  DeleteVideo: (id) => dispatch(DeleteVideo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(MyVideos);