import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Reviews extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className=" col-12">
        <div className="reviews-container">
          <div className="reviews-flex-wrapper">
            <div className="reviews-icon">
              <NavLink to="/search-result" className="">
                <img
                  className="reviews-icon__png"
                  src="../images/news-icon.png"
                  alt=""
                />
              </NavLink>
            </div>
            <div className="reviews-desc">
              <p className="">
                <NavLink to="/search-result" className="reviews-desc__title">
                  تخفیفان | برنامه تخفیف گروهی
                </NavLink>
              </p>
              <p className="reviews-desc__dev">تخفیفان</p>
              <p className="reviews-desc__market">کافه بازار</p>
              <p className="reviews-desc__more">
                نرم افزار / خرید / رایگان / ۴.۵ امتیاز / +۲۰۰۰۰۰ دانلود
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Reviews;
