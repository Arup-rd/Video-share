import React from 'react';
import '../../Styles/dashboard.scss';
import Axios from 'axios';
import storage from '../../Firebase/firebase';
import conf from '../../config';

class AddNewContent extends React.Component{
  state = {
    categoryList: false,
    title: '',
    category: '',
    description: '',
    file: '',
    contentType: '',
    tags: [],
    thumbnail: '',
    uploadStatus: null,
    progress: false
  }
  componentDidMount() {
    Axios.get(`${conf.server}/api/category`).then((res) => {
      this.setState({
        categoryList: res.data
      })
    }).catch((e) => {
      console.log(e)
    })
  }

  handleFileUpload = async (e) => {
    let data = new FormData();
    data.append('docs', e.target.files[0]);

    this.setState({
        uploadStatus: 'Please Wait...',            
    })

    Axios.post(`${conf.server}/api/files`, data, {
        headers: {
            'Content-Type': 'multipart/form-data',
            'authorization': localStorage.getItem('auth')
        }
    }).then((res) => {
        console.log(res.data);
        this.setState({
            uploadStatus: 'Successfull',
            file: res.data.files._id       
        })
    }).catch((e) => {
        console.log("errr", e)
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
        progress: 1
    })
    const body = {
        title: this.state.title,
        category: this.state.category,
        description: this.state.description,
        file: this.state.file,
        tags: this.state.tags,
        contentType: this.state.contentType
    };
    Axios({
        method: 'post',
        url: `${conf.server}/api/content`,
        data: body,
        headers: {
            'authorization': localStorage.getItem('auth')
        }
    }).then((res) => {
        console.log(res.data)
        this.props.history.push('/myaccount');
        this.setState({
            progress: 2
        })
    }).catch((e) => {
        console.log(e)
        this.setState({
            progress: undefined
        })
    })
  }

  render() {
    return (
    <div className="col-md-9" id="regLoginForm">
      <form className="m-0" role="form" onSubmit={this.handleSubmit} encType='multipart/form-data'>
        <h1 className="text-center">Add New Content</h1>
          <div className="row">
              <div className="col-md-6">
                  <div className="form-group has-success has-feedback">
                      <label className="control-label" htmlFor="inputSuccess3">Title</label>
                      <input type="text" className="form-control" id="inputSuccess3" placeholder="Video/Image Title" required="required" onChange={(e)=> {
                          this.setState({
                              title: e.target.value
                          });
                      }}/>
                  </div>
              </div>
              <div className="col-md-6">
                  <div className="form-group has-warning has-feedback">
                      <label className="control-label" htmlFor="inputWarning3">Category</label><br/>
                      <select className="form-control" required="required" onChange={(e) => {
                          this.setState({
                              category: e.target.value
                          })
                      }}>
                        <option value="">Select a category</option>
                        {this.state.categoryList ? 
                        this.state.categoryList.map((category) => {
                          return <option key={category._id} value={category._id}>{category.name}</option>
                        })
                        : <option value="-1">Loading...</option>}
                      </select>
                  </div>
              </div>
              <div className="col-md-6">
                  <div className="form-group has-warning has-feedback">
                      <label className="control-label" htmlFor="inputWarning3">Content Type</label><br/>
                      <select className="form-control" required="required" onChange={(e) => {
                          this.setState({
                              contentType: e.target.value
                          })
                      }}>
                        <option value="-1">Select a Type</option>
                        <option value="Video">Video</option>
                        <option value="Image">Image</option>
                      </select>
                  </div>
              </div>
              <div className="col-md-6">
                  <div className="form-group has-success has-feedback">
                      <label className="control-label" htmlFor="inputSuccess3">Tags</label>
                      <input type="text" className="form-control" id="inputSuccess3" placeholder="Tag will be added after a comma" onKeyUp={(e)=> {
                        if (e.keyCode === 188) {
                            const tag = e.target.value.substring(0, e.target.value.indexOf(','));
                            e.target.value = '' ;
                            this.setState({
                                tags: [
                                    ...this.state.tags,
                                    tag
                                ]
                            });
                        }
                      }}/>
                      {/* <i className="fa fa-check form-control-feedback"></i> */}
                  </div>
              </div>
              <div className="col-md-12 mb-2">
                    {this.state.tags.map((tag, i) => {
                        return <span onClick={() => {
                            let newTag = [];
                            newTag = this.state.tags.filter((filterTag, index) => {
                                return filterTag !== tag
                            })
                            this.setState({
                                tags: newTag
                            })
                        }} key={i} className="tag p-1 mr-2 my-2 btn btn-pri">{tag}</span>
                    })}
                    {this.state.tags.length !== 0 && 'Click To Remove Tag'}
              </div>
              <div className="col-md-12">
                  <div className="form-group has-warning has-feedback">
                      <label className="control-label" htmlFor="inputError3">Description</label>
                      <textarea rows={10} type="text" className="form-control" id="inputError3" placeholder="Video/Image Description..." onChange={(e) => {
                          this.setState({
                              description: e.target.value
                          })
                      }}></textarea>
                  </div>
              </div>
          </div>
          <div className="row">
              <div className="col-md-12">
                  <div className="form-group">
                      <label className="control-label" htmlFor="inputError3">Upload File</label><br/>
                      
                      <input type="file" id="exampleInputFile" onChange={this.handleFileUpload}/><br/>
                      <p className="help-block">{this.state.uploadStatus ? this.state.uploadStatus : 'Upload your file'}</p>
                      {this.state.msg && <h3 className="help-block">{this.state.msg}</h3>}
                  </div>
              </div>
          </div><br/>
          {/* <div className="row">
              <div className="col-md-12">
                  <div className="form-group">
                      <label className="control-label" htmlFor="inputError3">Upload Thumbnail</label><br/>
                      <input type="file" id="exampleInputFile" onChange={this.handleFileUpload}/><br/>
                      <p className="help-block">{this.state.uploadStatus ? this.state.uploadStatus : 'Upload your file'}</p>
                      {this.state.msg && <h3 className="help-block">{this.state.msg}</h3>}
                  </div>
              </div>
          </div> */}
            <input type="submit" className="btn btn-pri" defaultValue="Save & Publish"/>
            <div className="text-center"> 
            {this.state.progress === 1 && <span className="alert alert-warning">Please Wait...</span>}
            {this.state.progress === 2 && <span className="alert alert-success">Successfully Published</span>}
            {this.state.progress === undefined && <span className="alert alert-danger">Error While Publishing</span>}
            </div>
      </form>
    </div>
    )
  }
}

export default AddNewContent;