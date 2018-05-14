import React from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import Row from '../Row';
import Card from '../Card';
import conf from '../../config';
import Loader from '../Loader';
import { MyImage, deleteContent, DeleteImage } from '../../Actions/content';

class MyImages extends React.Component{
  state = {
    data: false
  }
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
  }

  componentWillUpdate(){
    console.log(this.props.images)
  }

  DeleteImage = (id) => {
    Axios.delete(`${conf.server}/api/content/${id}`, {
      headers: {
        'authorization': localStorage.getItem('auth')
      }
    }).then((res) => {
      this.props.DeleteImage(id);
    }).catch((e) => {
      console.log(e)
    })
  }

  render(){
    return (
      <div className="col-md-9">
      {this.props.images &&
        <Row>
          {this.props.images.slice(0, 12).map((image) => {
            return (
              <Card 
                key={image._id} 
                data={image} 
                permitted={true}
                deleteItem={this.DeleteImage}
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
  images: state.content.images
})
const mapDispatchToProps = (dispatch) => ({
  MyImage: (data) => (dispatch(MyImage(data))),
  DeleteImage: (id) => dispatch(DeleteImage(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(MyImages);