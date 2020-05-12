import React, { Component } from "react";
import { NavLink } from "react-router-dom";
// import MarketFilter from "../search-container/market-filter";

class SearchTabs extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-1" />
        <div className="col-11">
          <ul className="search-tabs">
            <li className="search-tabs__items">
              <NavLink to="/search-result" className="search-tabs__links" activeStyle={{color:'#e47d25', borderBottom: '3px solid #d05627'}}>
                همه
              </NavLink>
            </li>
            <li className="search-tabs__items">
              <NavLink exact to="/app-result" className="search-tabs__links" activeStyle={{color:'#e47d25', borderBottom: '3px solid #d05627'}} >
                نرم افزار
              </NavLink>
            </li>
            <li className="search-tabs__items">
              <NavLink to="/game-result" className="search-tabs__links" activeStyle={{color:'#e47d25', borderBottom: '3px solid #d05627'}} >
                بازی
              </NavLink>
            </li>
            <li className="search-tabs__items">
              <NavLink to="/dev-result" className="search-tabs__links" activeStyle={{color:'#e47d25', borderBottom: '3px solid #d05627'}} >
                توسعه دهنده
              </NavLink>
            </li>
            <li className="search-tabs__items">
              <NavLink to="/desc-result" className="search-tabs__links" activeStyle={{color:'#e47d25', borderBottom: '3px solid #d05627'}} >
                توضیحات
              </NavLink>
            </li>
            <li className="search-tabs__items">
              <NavLink to="/review-result" className="search-tabs__links" activeStyle={{color:'#e47d25', borderBottom: '3px solid #d05627'}} >
                در رسانه ها
              </NavLink>
            </li>
            <li className="search-tabs__items">
            &nbsp; &nbsp;&nbsp; &nbsp;
            <select>
              <option value="1">تمام مارکت ها</option>
              <option value="2">کافه بازار</option>
              <option value="3">مایکت</option>
            </select>
          </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SearchTabs;
