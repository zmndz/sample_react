import React, { Component } from "react";
// import Apps from "../components/apps";
import Games from "../components/games";
// import Devs from "../components/dev";
// import Descs from "../components/desc";
// import Reviews from "../components/review";
// import MarketFilter from "../market-filter";
// import Axios from "axios";
// import { stat } from "fs";

class SearchContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      apiURL: "",
      data: "",
      meta: "",
      message: ""
    };
  }

  componentDidMount() {
   
  }

  render() {
    return (
      <div className="row">
        {/*<MarketFilter />*/}
        <div className="search-container">
          {this.state.isLoaded ? <Games isLoaded={this.state.isLoaded} data={this.state.data} /> : null }
          
          {/*<Apps />
          <Descs />
          <Devs />
          <Reviews />
          <Apps />
          <Descs />
          <Devs />
          <Reviews />*/}
        </div>
      </div>
    );
  }
}
// const mapStateToProps = state => ({
//   text: state.searchState.text,
//   data: state.searchState.data,
//   error: state.searchState.error
// });

// const mapDispatchToProps = dispatch => ({
//   onSearch: (text) =>{
//     sendSearchApi(dispatch,text)
//   },
// });

// export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
export default SearchContainer;
