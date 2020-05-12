import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Devs extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className=" col-12">
        <div className="devs-container">
          <div className="devs-flex-wrapper">
            <div className="devs-icon">
              <NavLink to="/search-result" className="">
                <img
                  className="devs-icon__png"
                  src="../images/user-icon.png"
                  alt=""
                />
              </NavLink>
            </div>
            <div className="devs-desc">
              <p>
                <NavLink className="devs-desc__title" to="/search-result">
                  بازیلاین
                </NavLink>
              </p>
              <p className="devs-desc__more">تعداد نرم افزار: ۷ / تعداد بازی:۱۲ / تعداد مخاطب: +۲۰۰۰۰۰ / میزان درآمد: ۵۰۰۰۰۰۰ / کافه بازار</p>
              <p className="devs-desc__tops">
                <NavLink className="devs-desc__tops-title" to="/search-result">
                فوتبال جام قهرمانان 2018
                </NavLink>
                <span> / </span>
                <NavLink className="devs-desc__tops-title" to="/search-result">
                تسخیر کلن ها (با زبان فارسی)
                </NavLink>
                <span> / </span>

                <NavLink className="devs-desc__tops-title" to="/search-result">
                ارباب اژدها (با زبان فارسی)

                </NavLink>

              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Devs;
