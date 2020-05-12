import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class LogoResult extends Component {
  render() {
    return (
      <NavLink exact to="/">
        <img className="logo__result" src="../images/logo.png" alt="" />
      </NavLink>
    );
  }
}

export default LogoResult;

