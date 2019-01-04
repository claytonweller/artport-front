import React, { Component } from "react";
import "./App.css";
import Login from "./LogIn";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    };
  }

  render() {
    let display = <Login />;
    if (this.state.loggedIn) {
      display = <h1>Logged In!</h1>;
    }
    return <div className="App">{display}</div>;
  }
}

export default App;
