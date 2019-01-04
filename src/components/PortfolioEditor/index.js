import React, { Component } from "react";
import { connect } from "react-redux";
import { Bio } from "./Bio";
import { Images } from "./Images";

export class PortfolioEditor extends Component {
  render() {
    return (
      <div className="portfolio">
        <h3>this.props.currentUser.email</h3>
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
