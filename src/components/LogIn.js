import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../actions/auth";

export class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.dispatch(login(this.state.email, this.state.password));
  }

  render() {
    return (
      <div className="login">
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

const mapStateToProps = state => {
  return {
    currentUser: state.auth.currentUser
  };
};

export default connect(mapStateToProps)(LogIn);
