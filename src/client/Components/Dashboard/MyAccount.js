import React from 'react';
import { connect } from 'react-redux';
import Row from '../Row';

class MyAccount extends React.Component{
  render(){
    return (
      <div className="col-md-9">
        <Row>
          <div className="col-md-4">
            <div className="card">

            </div>
          </div>
        </Row>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  images: state.content.images,
  videos: state.content.videos
})

export default connect(mapStateToProps)(MyAccount);