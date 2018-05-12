import React from 'react';
import Axios from 'axios';
import conf from '../../config';

class CategorySingle extends React.Component{
  state = {
    content: false,
    filter: this.props.firstFilter
  }
  componentDidMount(){
    Axios.get(`${conf.server}/content/category/${this.props.match.params.id}`).then((res) => {
      this.props.setCatContent(res.data);
      // console.log('after',res.data)
      this.setState({
        content: true
      })
    }).catch((e) => {
      this.setState({
        content: undefined
      })
      console.log('error found in ', e);
    })
  }

  render() {
    console.log(this.props.cat_id)
    return (
      <div className="recent-videos">
        <h5><img src="/images/recent.png" alt="" />Recent-videos</h5>
        <div className="grids grids2">
        {/* {this.state.content && 
          props.cat_content.map((content, key) => {
            return <Grid content={content} key={content._id}/>
          })
        }
        {this.state.content === undefined && 'Nothing Found'} */}
        </div>

      </div>
    )
  }
}

export default CategorySingle;