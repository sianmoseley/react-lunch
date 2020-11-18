import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return (
      <div className="loginForm">
        <form onSubmit={this.onSubmit}>
          <ul className="form-container">
            <li>
              <label>Username</label>
              <input
                name="username"
                type="text"
                // required
                onChange={this.handleInput}
              ></input>
            </li>
            <li>
              <label>Password</label>
              <input
                name="password"
                type="password"
                // required
                onChange={this.handleInput}
              ></input>
            </li>
            <li>
              <button className="loginButton" type="submit">
                Login
              </button>
            </li>
          </ul>
        </form>
      </div>
    );
  }
}
