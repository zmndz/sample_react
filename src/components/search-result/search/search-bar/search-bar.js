import React, { Component } from "react";
import {NavLink} from 'react-router-dom';
// import LogoResult from "./logo-result";
// import SearchButtonResult from "./search-button-result";
// import SearchInputResult from "./search-input-result";
import SearchTabs from "./search-tabs";
import {sendSearchApi} from '../../../../redux/actions/search'
import { connect } from 'react-redux';

class SearchBar extends Component {
  render() {
    return (
      <div className="search-bar row">
        <div className="search-bar__child col-12">
        <img className="logo__result" src="../images/logo.png" alt="" />
        <input className="Input-text__result" type="text" />
          <NavLink to="/search-result"><input value="بگرد" className="Input-button__result" type="button" onClick={()=>{this.props.onSearch('test')}}/></NavLink>
          </div>
          <SearchTabs />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state)
  return {
  text: state.searchState.text,
  data: state.searchState.data,
  error: state.searchState.error
  };
}

const mapDispatchToProps = dispatch => ({
  onSearch: (text) =>{
    sendSearchApi(dispatch,text)
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
// export default SearchBar;
