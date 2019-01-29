import React, { Component } from "react";
import { connect } from "react-redux";
import { Bio } from "./Bio";
import { Images } from "./Images";
import { logout } from "../../actions/auth";

export class PortfolioEditor extends Component {
  logOutClick = e => {
    e.preventDefault();
    console.log("logout");
    console.log(this.props);
    this.props.dispatch(logout());
  };

  render() {
    return (
      <div className="portfolio">
        <h3>this.props.currentUser.email</h3>
        <a onClick={e => this.logOutClick(e)} href="none">
          Log Out
        </a>
        <Bio />
        <Images />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.auth.currentUser
  };
};

export default connect(mapStateToProps)(PortfolioEditor);
