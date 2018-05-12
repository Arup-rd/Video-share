import React from 'react';
import Sidebar from '../Components/Sidebar';
import Grid from '../Components/Grids/Grid';
import SearchBar from '../Components/SearchBar';
import { setSingleContent, getSingle } from '../Actions/content';
import Axios from 'axios';
import { connect } from 'react-redux';
import SingleContent from '../Components/Content/Single.Content';
import conf from '../config';

class Single extends React.Component{
  state = {
    single: false
  }

  componentDidMount(){
    console.log('post')
    Axios.get(`${conf.server}/api/content/${this.props.match.params.id}`).then((res) => {
        // console.log(res);
        this.props.setOneContent(res.data);
        this.setState({
            single: true
        })
    }).catch((e) => {
        this.setState({
            single: false
        })
        console.log('Error getting message', e);
        throw e;
    })
  }


render(){
  return(
    <div className="content">
      <div className="inner-page">
        <SearchBar/>
        {this.state.single ?
        <SingleContent single={this.props.single}/>
        : 
        'Loading...'}
        <div className="clear"> </div>
        <div className="related-videos">
          <h6>Related-Videos</h6>
          <div className="grids">
            {/* <Grid/>
            <Grid/>
            <Grid/> */}
          </div>
        </div>
        <div className="clear"> </div>
      </div>
      <Sidebar/>
      <div className="clear"> </div>
    </div>
    )
  }
}

const mapStateToProps = (state) => ({
  allContent: state.content.all,
  single: state.content.single  
})

const mapDispatchToProps = (dispatch, props, getState) => ({
  setOneContent: (data) => dispatch(setSingleContent(data)),
  setSingleRedux: () => dispatch(getSingle(props.match.params.id))
}) 

export default connect(mapStateToProps, mapDispatchToProps)(Single)
