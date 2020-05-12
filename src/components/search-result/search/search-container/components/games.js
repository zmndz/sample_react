import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Games extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      data: "",
      meta: "",
      developers: "",
      appDetails: "",
      pagination: ""
      // message: ''
    };
  }

  componentDidMount() {
    console.log(this.props.isLoaded);
    const t = this.props.isLoaded
      ? (this.setState({
          isLoaded: true,
          data: this.props.data,
          meta: this.props.data.meta,
          developers: this.props.data.developers,
          appDetails: this.props.data.app_details,
          pagination: this.props.data.pagination
        },

      )
      )
      : null;
    return t;
  }

  render() {
    if (this.state.isLoaded) {
      const appDetails = this.state.appDetails;
      console.log(appDetails);
    }
    return (
      <span>
        <div className="col-12">
          <div className="games-container">
            {this.state.isLoaded ? (
              <div className="games-flex-wrapper">
                <div className="games-icon">
                  <NavLink to="/search-result" className="">
                    <img
                      className="games-icon__png"
                      src="../images/choopan.png"
                      alt=""
                    />
                  </NavLink>
                </div>
                <div className="games-desc">
                  <p className="">
                    <NavLink className="games-desc__title" to="/search-result">
                      چوپان
                    </NavLink>
                  </p>
                  <p className="games-desc__dev">گلیم گیمز</p>
                  <p className="games-desc__market">کافه بازار</p>
                  <p className="games-desc__more">
                    بازی / هیجانی / رایگان / ۴.۳ امتیاز / +۴۰۰۰ دانلود
                  </p>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </span>
    );
  }
}

export default Games;
