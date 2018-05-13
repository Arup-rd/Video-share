import React from 'react';
import Row from '../Row';
import VideoCard from './Video.Card';
import Card from '../Card';
import Axios from 'axios';
import { setContent } from '../../Actions/content';
import { connect } from 'react-redux';
import conf from '../../config';
import SelectExpenses from '../../Selector/filter';

class Contents extends React.Component{
  state = {
    videos: false,
    start: 0,
    page: 1
  }

  // componentDidMount() {
  //   Axios.get(`${conf.server}/api/content/video/`).then((res) => {
  //     this.props.setContent(res.data);
  //     this.setState({
  //       videos: res.data
  //     })
  //     console.log(res.data.length, this.state.start)
  //   }).catch((e) => {
  //     console.log('error found', e);
  //   })
  // }


  render(){
    return (
      <Row>
        {this.props.data && this.props.data.slice(this.state.start, this.state.start+12).map((data, i) => {
          return <Card data={data} key={data._id}/>
        })}
        <div className="col-md-12 pagination p-4 d-flex justify-content-between">
          <button className="btn btn-pri px-3" onClick={() => {
            this.state.start!=0 && this.setState({
              start: this.state.start - 12,
              page: this.state.page-1              
            })
          }}>Previous</button>
          {/* <div>
            <button className="btn btn-light">1</button>
            <button className="btn btn-light">2</button>
            <button className="btn btn-light">3</button>
          </div> */}
          <button className="btn btn-pri float-right" onClick={() => {
            this.state.start!= this.props.videos.length && this.setState({
              start: this.state.start+12,
              page: this.state.page+1
            })
          }}>Next</button>
        </div>
      </Row>
    )
  }
}

const mapsStateToProps = (state) => ({
  // videos: SelectExpenses(state.content.all, state.filter)
})

const mapDispatchToProps = (dispatch) => ({
  setContent: (data) => dispatch(setContent(data))
})

export default connect(mapsStateToProps, mapDispatchToProps)(Contents);