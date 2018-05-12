import React from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import Grid from '../Components/Grids/Grid';
import Sidebar from '../Components/Sidebar';
import { setContent } from '../Actions/content';
import conf from '../config';
import Slider from '../Components/Homepage/Slider';
import BrowseRepo from '../Components/Homepage/BrowseRepo';
import FeatureContent from '../Components/Homepage/FeatureContent';
import Counter from '../Components/Homepage/Counter';
import QuickStart from '../Components/Homepage/QuickStart';

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
        <FeatureContent/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)

