import React, { Component } from 'react';
import Games from '../components/games';

class SearchContainer extends Component {
  constructor(props){
    super(props);

    this.state = {}
  }

  render() {

    return (
      <div className="search-container row">
        <Games />
      </div>
    );
  }
}

export default SearchContainer;
