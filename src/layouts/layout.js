import React from "react";
import Footer from "../components/common/footer";
import SearchBar from "../components/search-result/search/search-bar/search-bar";

const Layout = props => {
  return (
    <div className="wrapper">
      <SearchBar />
      <div className="bdy">
        <div className="container-fluid">{props.children}</div>
      </div>
      <Footer place="result" />
    </div>
  );
};

export default Layout;
