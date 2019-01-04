import React, { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <h2>Log in</h2>
        <form onSubmit={e => this.onSubmit(e)}>
          <label>
            Email
            <input
              onChange={e => this.setState({ email: e.target.value })}
              id="email"
              type="email"
            />
          </label>
          <label>
            password
            <input
              onChange={e => this.setState({ password: e.target.value })}
              id="password"
              type="password"
            />
          </label>
          <button type="submit">Let's Go!</button>
        </form>
      </div>
    );
  }
}
