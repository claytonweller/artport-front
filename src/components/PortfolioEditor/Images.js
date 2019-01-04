import React, { Component } from "react";
import { connect } from "react-redux";

export class Images extends Component {
  render() {
    return (
      <div className="Bio">
        <h1>IMages</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.auth.currentUser
  };
};

export default connect(mapStateToProps)(Images);
