import React from 'react'
import Grid from '../Components/Grids/Grid'
import CategoryList from '../Components/Categories/CategoryList';
import { connect } from 'react-redux'
import { setCategory, setCatContent } from '../Actions/content';
import Axios from 'axios';
import conf from '../config';

class Category extends React.Component{
  state = {
    content: false,
    category: false,
    filter: ''
  }

  componentDidMount() {
    Axios.get(`${conf.server}/api/category`).then((res) => {
      // console.log(res.data)
      this.props.setCategory(res.data);
      this.setState({
        category: true,
        filter: res.data[0]._id
      })
      this.filterComponent();
    }).catch((e) => {
      this.setState({
        category: false
      })
      console.log('error found ', e);
    })
  }

  filterComponent = async () => {
    // console.log(this.state.filter)
    Axios.get(`${conf.server}content/category/${this.state.filter}`).then(async (res) => {
      await this.props.setCatContent(res.data);
      console.log('after',res.data)
      this.setState({
        content: true
      })
    }).catch((e) => {
      this.setState({
        content: undefined
      })
      console.log('error found', e);
    })
  }

  filterCategory = async (filter) => {
    await this.setState({
      filter: filter
    })
    this.filterComponent();
  }

  render(){
    const props = this.props;
    console.log('cont', this.state.content, props.con);
    return (
      <div className="content">
      <div className="categories">
        {this.state.category ? 
          <CategoryList category={this.props.category} filter={this.filterCategory}/>
        : 'Loading'}
        <div className="categories-types">
          <div className="recent-videos">
            <h5><img src="/images/recent.png" alt="" />Recent-videos</h5>
            <div className="grids grids2">
            {this.state.content && 
              props.cat_content.map((content, key) => {
                return <Grid content={content} key={content._id}/>
              })
            }
            {this.state.content === undefined && 'Nothing Found'}
            </div>

          </div>
          <div className="recent-videos">
            <h5><img src="/images/recent.png" alt="" />Most-View-videos</h5>
            {/* <div className="grids">
              <Grid/>
              <Grid/>
              <Grid/>
            </div> */}
          </div>
        </div>
      </div>
      <div className="clear"> </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  allContent: state.content.all,
  category: state.content.category, // Getting all Category
  cat_content: state.content.cat_content // Filtered Category Content
});

const mapDispatchToProps = (dispatch) => ({
  setCategory: (data) => dispatch(setCategory(data)),
  setCatContent: (data) => dispatch(setCatContent(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Category)
