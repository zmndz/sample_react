import React, { Component } from "react";
// import { NavLink } from "react-router-dom";

class Apps extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="col-12 market-filter">
        انتخاب مارکت: &nbsp;
        <select>
          <option value="1">همه</option>
          <option value="2">کافه بازار</option>
          <option value="3">مایکت</option>
        </select>
      </div>
    );
  }
}

export default Apps;
