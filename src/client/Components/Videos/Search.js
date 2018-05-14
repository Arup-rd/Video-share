import React from 'react';

class Search extends React.Component{
  state = {
    filter: ''
  }

  render(){
    return (
      <div className="col-md-6 offset-md-3 py-5 text-center">
        <form onSubmit={(e) => {
          e.preventDefault();
        }}>
          <div className="input-group">
            <input 
              onChange={(e) => {
                this.props.Search(e.target.value)            
              }} 
              type="text" 
              ref="search" 
              className="form-control" 
              placeholder="Type Keywords To Search Image/Video or Gif's..."/>
            <div className="input-group-btn">
              <button className="btn btn-default" type="submit">Search</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Search;