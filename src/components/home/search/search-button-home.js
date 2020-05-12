import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class SearchButtonHome extends Component {
  render() {
    return (
        <NavLink to="/search-result"><input value="بگرد" className="Input-button__home" type="button" /></NavLink>
    );
  }
}

export default SearchButtonHome;
