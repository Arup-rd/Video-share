import React from 'react';
import Sidebar from '../Components/Sidebar';
import Grid from '../Components/Grids/Grid';
import SearchBar from '../Components/SearchBar';
import { setSingleContent, getSingle } from '../Actions/content';
import Axios from 'axios';
import { connect } from 'react-redux';
import SingleContent from '../Components/Content/Single.Content';
import conf from '../config';
import Loader from '../Components/Loader'
import Container from '../Components/Container';
import PopularContent from '../Components/Content/PopularContent';
import Row from '../Components/Row';

class Single extends React.Component{
  state = {
    single: false
  }

  componentDidMount(){
    Axios.get(`${conf.server}/api/content/${this.props.match.params.id}`).then((res) => {
        // console.log(res);
        this.props.setOneContent(res.data);
        this.setState({
            single: res.data
        })
        this.StateUpdate({ views: this.state.single.views+1 });
    }).catch((e) => {
        this.setState({
            single: false
        })
        console.log('Error getting message', e);
        throw e;
    })
  }

  StateUpdate = (data) => {
    console.log(data);
    Axios({
      method: 'put',
      url: `${conf.server}/api/content/public/${this.props.match.params.id}`,
      data,
      headers: {
          'Content-Type': 'application/json'
      }
    }).then((res) => {
      this.props.setOneContent(res.data);

      this.setState({
        single: res.data
      })
    }).catch(e => {
      console.log(e)
    })
  }


  render(){
    return(
      <section className="py-5 bg-light" id="single">
        <div className="content">
          <Container>
            <Row>
            {this.props.single ?
              <SingleContent 
                single={this.props.single && this.props.single}
                StateUpdate={this.StateUpdate}
                shareLink={this.props.location.pathname}
              />
              :
              <Loader/>
            }
              {/* {this.props.single && <PopularContent/>} */}
            </Row>
          </Container>
        </div>
      </section>
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
