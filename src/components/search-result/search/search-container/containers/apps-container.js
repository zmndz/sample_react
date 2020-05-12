import React, { Component } from 'react';
import Apps from '../components/apps';

class SearchContainer extends Component {
  constructor(props){
    super(props);

    this.state = {}
  }

  render() {

    return (
      <div className="search-container row">
        <Apps />
      </div>
    );
  }
}

export default SearchContainer;
