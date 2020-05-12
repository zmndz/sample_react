import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "../layouts/layout";
import Home from "./home/";
import SearchResult from "./search-result/";
import Apps from "./search-result/search/search-container/containers/apps-container";
import Games from "./search-result/search/search-container/containers/games-container";
import Devs from "./search-result/search/search-container/containers/devs-container";
import Descs from "./search-result/search/search-container/containers/desc-container";
import Market from "./search-result/search/search-container/containers/market-container";
import Reviews from "./search-result/search/search-container/containers/review-container";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Layout>
          <Route path="/search-result" component={SearchResult} />
          <Route path="/app-result" component={Apps} />
          <Route path="/game-result" component={Games} />
          <Route path="/dev-result" component={Devs} />
          <Route path="/desc-result" component={Descs} />
          <Route path="/market-result" component={Market} />
          <Route path="/review-result" component={Reviews} />
        </Layout>
      </Switch>
    );
  }
}

export default App;
