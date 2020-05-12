import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/app";
import {Provider} from "react-redux";
import { store } from "./redux/stores/config-store";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/css/styles.css";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
