import React, { Component } from "react";
import "./App.css";
import Login from "./LogIn";
import { connect } from "react-redux";
import { PortfolioEditor } from "./PortfolioEditor";

class App extends Component {
  render() {
    let display = <Login />;
    if (!this.props.currentUser) {
      display = <PortfolioEditor />;
    }
    return <div className="App">{display}</div>;
  }
}

const mapsStateToProps = state => {
  return {
    currentUser: state.auth.currentUser
  };
};

export default connect(mapsStateToProps)(App);
