import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';

class SearchButtonResult extends Component {
  render() {
    return (
        <NavLink to="/search-result"><input value="بگرد" className="Input-button__result" type="button" onClick={this.props.onSearch()}/></NavLink>
    );
  }
}

export default SearchButtonResult;
