import React from 'react';
import Axios from 'axios';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Grid from '../Components/Grids/Grid';
import Sidebar from '../Components/Sidebar';
import { setContent } from '../Actions/content';
import conf from '../config';
import Slider from '../Components/Homepage/Slider';
import BrowseRepo from '../Components/Homepage/BrowseRepo';
import FeatureContent from '../Components/Homepage/FeatureContent';
import Counter from '../Components/Homepage/Counter';
import QuickStart from '../Components/Homepage/QuickStart';
import Loader from '../Components/Loader'

class Homepage extends React.Component{
  state = {
    content: false,
    data: ''
  }

  componentDidMount() {
    Axios.get(`${conf.server}/api/content/`).then((res) => {
      this.props.setContent(res.data);
      this.setState({
        content: true
      })
    }).catch((e) => {
      console.log('error found', e);
    })
  }

  render(){
    return (
    <div className="content">
        <Slider/>
        <BrowseRepo/>
        {this.props.allContent ? 
        <FeatureContent contents={this.props.allContent} hash={this.props.location.hash.substring(1)}/>
        :
        <Loader/>
        }
        <Counter/>
        <QuickStart/>
    </div>
    )
  }
}

const mapStateToProps = (state) => ({
  allContent: state.content.all
})

const mapDispatchToProps = (dispatch) => ({
  setContent: (body) => dispatch(setContent(body))
})

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);

