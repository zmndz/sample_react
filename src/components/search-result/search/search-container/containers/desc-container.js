import React, { Component } from 'react';
import Descs from '../components/desc';

class SearchContainer extends Component {
  constructor(props){
    super(props);

    this.state = {}
  }

  render() {

    return (
      <div className="search-container row">
        <Descs />
      </div>
    );
  }
}

export default SearchContainer;
