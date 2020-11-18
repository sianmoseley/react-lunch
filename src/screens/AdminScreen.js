import React, { Component } from "react";
import AdminHomeScreen from "./AdminHomeScreen";
import fire from "../config/firebase";
import AdminLoginScreen from "./AdminLoginScreen";

export default class AdminScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }
  componentDidMount() {
    this.authListener();
  }
  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App">
          {this.state.user ? <AdminHomeScreen /> : <AdminLoginScreen />}
        </div>
      </div>
    );
  }
}
