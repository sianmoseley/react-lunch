import React, { Component } from "react";
import fire from "../config/firebase";
require("firebase/auth");

export default class AdminLoginScreen extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: "",
      password: "",
    };
  }

  login(e) {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        console.log(u);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <div className="loginForm">
        <form onSubmit={this.onSubmit}>
          <ul className="form-container">
            <li>
              <label>Email</label>
              <input
                name="email"
                type="email"
                required
                onChange={this.handleChange}
                value={this.state.email}
              ></input>
            </li>
            <li>
              <label>Password</label>
              <input
                name="password"
                type="password"
                required
                onChange={this.handleChange}
                value={this.state.password}
              ></input>
            </li>
            <li>
              <button
                className="loginButton"
                type="submit"
                onClick={this.login}
              >
                Login
              </button>
            </li>
          </ul>
        </form>
      </div>
    );
  }
}
