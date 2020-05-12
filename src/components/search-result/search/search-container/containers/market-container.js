import React, { Component } from 'react';
import Market from '../components/market';

class SearchContainer extends Component {
  constructor(props){
    super(props);

    this.state = {}
  }

  render() {

    return (
      <div className="search-container row">
        <Market />
      </div>
    );
  }
}

export default SearchContainer;
