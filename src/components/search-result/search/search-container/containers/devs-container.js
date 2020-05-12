import React, { Component } from 'react';
import Devs from '../components/dev';

class SearchContainer extends Component {
  constructor(props){
    super(props);

    this.state = {}
  }

  render() {

    return (
      <div className="search-container row">
        <Devs />
      </div>
    );
  }
}

export default SearchContainer;
