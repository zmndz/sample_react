import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className={this.props.place === "home" ? "footer__home" : "footer__result"}>
      طراحی و توسعه توسط تیم فنی اسمارتیم. تمامی حقوق محفوظ می‌باشد
      </div>
    );
  }
}

export default Footer;
