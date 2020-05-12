import React, { Component } from 'react';
import Review from '../components/review';

class SearchContainer extends Component {
  constructor(props){
    super(props);

    this.state = {}
  }

  render() {

    return (
      <div className="search-container row">
        <Review />
      </div>
    );
  }
}

export default SearchContainer;
