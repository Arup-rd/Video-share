import React from 'react';
import Container from '../Components/Container';
import Search from '../Components/Videos/Search';
import Row from '../Components/Row';
import Contents from '../Components/Videos/Content';
import VideosNav from '../Components/Videos/Video.Nav';
import Counter from '../Components/Homepage/Counter';
import FeatureNav from '../Components/Homepage/FeatureNav';
import { connect } from 'react-redux';
import Axios from 'axios';
import conf from '../config';
import { setCatContent, setCategory, setContent } from '../Actions/content';
import Loader from '../Components/Loader'

class Images extends React.Component{
  state = {
    filter: false,
    category: false,
    images: false
  }

  componentDidMount() {
    Axios.get(`${conf.server}/api/content/image`).then((res) => {
      this.props.setCategory(res.data);
      this.setState({
        images: res.data,
      })
      this.props.location.hash && this.filterComponent(this.props.location.hash );
    }).catch((e) => {
      this.setState({
        images: false,
      })
      console.log('error found ', e);
    })
  }

  filterComponent = async (filter) => {
    Axios.get(`${conf.server}/api/content/image/${filter}`).then(async (res) => {
      this.props.setCatContent(res.data);
      this.setState({
        images: res.data,
      })
    }).catch((e) => {
      this.setState({
        images: undefined
      })
      console.log('error found', e);
    })
  }

  render(){
    return (
    <div className="content"> 
      <section id="images" className="images p-0">
        <Container>
          <Search/>
          <Row>
            <div className="col-md-2 p-0">
              <FeatureNav filter={this.filterComponent}/>
            </div>
            <div className="col-md-10">
              {this.state.images ? <Contents data={this.state.images}/>: <Loader/>}
            </div>
          </Row>
        </Container>
      </section>
      <Counter/>
    </div>
    )
  }
}

const mapStateToProps = (state) => ({
  allContent: state.content.all,
  category: state.content.category, // Getting all Category
  cat_content: state.content.cat_content, // Filtered Category Content
  singleCategory: state.category
})

const mapDispatchToProps = (dispatch) => ({
  setContent: (body) => dispatch(setContent(body)),
  setCategory: (data) => dispatch(setCategory(data)),
  setCatContent: (data) => dispatch(setCatContent(data))
})


export default connect(mapStateToProps, mapDispatchToProps)(Images)

