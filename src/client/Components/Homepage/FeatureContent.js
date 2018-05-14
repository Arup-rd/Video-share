import React, {Component} from 'react';
import { connect } from 'react-redux';
import OwlCarousel from 'react-owl-carousel';
import Container from '../Container';
import Row from '../Row';
import Card from '../Card';
import FeatureNav from './FeatureNav';
import { setContent, setCategory, setCatContent } from '../../Actions/content';
import Axios from 'axios';
import conf from '../../config';
import Loader from '../Loader';

class FeatureContent extends React.Component{
  state = {
    filter: false,
    category: false
  }

  componentDidMount() {
    Axios.get(`${conf.server}/api/category`).then((res) => {
      this.props.setCategory(res.data);
      this.setState({
        category: true,
        filter: res.data[0]._id
      })
      this.filterComponent(this.props.hash ? this.props.hash : res.data[0]._id);
    }).catch((e) => {
      this.setState({
        category: undefined,
        filter: false
      })
      console.log('error found ', e);
    })
  }


  filterComponent = async (filter) => {
    Axios.get(`${conf.server}/api/content/category/${filter}`).then(async (res) => {
      this.props.setCatContent(res.data);
      this.setState({
        content: true,
      })
    }).catch((e) => {
      this.setState({
        content: undefined
      })
      console.log('error found', e);
    })
  }


  render(){
    const contents = this.props.contents;
    return(
      <section id="feature" className=" bg-light py-5">
      <Container>
        <Row>
          <div className="col-md-2 p-0">
          {this.state.category ? 
            <FeatureNav category={this.props.category} filter={this.filterComponent}/>
          : this.state.category == undefined ? '' : 'Loading'}
          </div>
          <div className="col-md-10">
            <Row>
              {this.props.cat_content ? this.props.cat_content.slice(0, 9).map((content, key) => {
                return <Card key={key} data={content}/>
              }) : this.props.cat_content ? '' :<Loader className="col-md-12"/>}
            </Row>
          </div>
        </Row>
        <div className="text-center">
          <button className="btn btn-pri mt-4">Start Sharing Now</button>
        </div>
      </Container>
    </section>
    )
  }
}

const mapStateToProps = (state) => ({
  allContent: state.content.all,
  category: state.content.category, // Getting all Category
  cat_content: state.content.cat_content // Filtered Category Content
})

const mapDispatchToProps = (dispatch) => ({
  setContent: (body) => dispatch(setContent(body)),
  setCategory: (data) => dispatch(setCategory(data)),
  setCatContent: (data) => dispatch(setCatContent(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(FeatureContent);