import React, { Component } from "react";
import LogoHome from "./search/logo-home";
import SearchInputHome from "./search/search-input-home";
import SearchButtonHome from "./search/search-button-home";
import Footer from "../common/footer";

class HomeSearchContainer extends Component {
  render() {
    return (
      <span>
        <div className="col-12 text-center">
          <LogoHome />
          <SearchInputHome />
          <SearchButtonHome />
        </div>
        <Footer place="home" />
      </span>
    );
  }
}

export default HomeSearchContainer;
