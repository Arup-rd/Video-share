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
import { setCatContent, setCategory, setContent, MyImage } from '../Actions/content';
import Loader from '../Components/Loader'
import SearchContent from '../Selectors/content';
import { addFilter } from '../Actions/filter';

class Images extends React.Component{
  state = {
    filter: false,
    category: false,
    images: false
  }

  componentDidMount(){
    Axios.get(`${conf.server}/api/content/image`).then((res) => {
      this.setState({
        images: true
      })
      this.props.MyImage(res.data);
      
      // this.props.location.hash && this.filterComponent(this.props.location.hash.substring(1));
            
    }).catch((e) => {
      console.log(e);
      this.setState({
        images: undefined
      })
    })
  }

  filterComponent = async (filter) => {
    console.log(filter)
    Axios.get(`${conf.server}/api/content/image/${filter}`).then(async (res) => {
      console.log(res.data)
      this.props.MyImage(res.data);
      this.setState({
        images: true,
      })
    }).catch((e) => {
      this.setState({
        images: undefined
      })
      console.log('error found', e);
    })
  }

  Search = (text) => {
    this.props.addFilter(text);
  }

  render(){
    return (
    <div className="content"> 
      <section id="images" className="images p-0">
        <Container>
          <Search Search={this.Search}/>
          <Row>
            <div className="col-md-2 p-0">
              <FeatureNav filter={this.filterComponent}/>
            </div>
            <div className="col-md-10">
              {this.props.images ? <Contents data={this.props.images}/>: <Loader/>}
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
  images: SearchContent(state.content.images, state.filter),
  allContent: state.content.all,
  category: state.content.category, // Getting all Category
  cat_content: state.content.cat_content, // Filtered Category Content
  singleCategory: state.category
})

const mapDispatchToProps = (dispatch) => ({
  addFilter: (text) => dispatch(addFilter(text)),
  setContent: (body) => dispatch(setContent(body)),
  setCategory: (data) => dispatch(setCategory(data)),
  MyImage: (data) => (dispatch(MyImage(data))),
  setCatContent: (data) => dispatch(setCatContent(data))
})


export default connect(mapStateToProps, mapDispatchToProps)(Images)

