import React, {Component} from 'react';

class SearchBar extends Component{
  constructor(props){
    super(props);

    this.state = {term: ''};
  }

  render(){
    return (
      <div className='search-bar'>
        <input
          value = {this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
        <button
          className="btn btn-primary red"
          onClick={event => this.executeSearch(this.state.term) }>
          Search
        </button>
      </div>
    );
  }
  executeSearch(term){
    this.props.onSearchTermChange(term);
  }

  onInputChange(term){
    this.setState({term});
  }
}

export default SearchBar;
