import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Apps extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className=" col-12">
        <div className="apps-container">
          <div className="apps-flex-wrapper">
            <div className="apps-icon">
              <NavLink to="/search-result" className="">
                <img
                  className="apps-icon__png"
                  src="../images/takhfifan.png"
                  alt=""
                />
              </NavLink>
            </div>
            <div className="apps-desc">
              <p className="">
                <NavLink to="/search-result" className="apps-desc__title">
                  تخفیفان | برنامه تخفیف گروهی
                </NavLink>
              </p>
              <p className="apps-desc__dev">تخفیفان</p>
              <p className="apps-desc__market">کافه بازار</p>
              <p className="apps-desc__more">
                نرم افزار / خرید / رایگان / ۴.۵ امتیاز / +۲۰۰۰۰۰ دانلود
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Apps;
