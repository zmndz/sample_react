import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Desc extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className=" col-12">
        <div className="desc-container">
          <div className="desc-flex-wrapper">
            <div className="desc-icon">
              <NavLink to="/search-result" className="">
                <img
                  className="desc-icon__png"
                  src="../images/sarzamin.png"
                  alt=""
                />
              </NavLink>
            </div>
            <div className="desc-desc">
              <p className="">
                <NavLink to="/search-result" className="desc-desc__title">
                  سرزمین اژدها
                </NavLink>
              </p>
              <p className="desc-desc__dev">گلیم گیمز</p>
              <p className="desc-desc__market">کافه بازار</p>
              <p className="desc-desc__more">
                بازی / اکشن / رایگان / ۴.۱ امتیاز / +۴۰۰۰۰۰ دانلود
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Desc;
