import React, { Component } from "react";
import fire from "../config/firebase";

export default class AdminHomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  logout() {
    fire.auth().signOut();
  }

  render() {
    return (
      <div className="order-details">
        <h3>Admin Homepage</h3>
        <button onClick={this.logout}>Logout</button>
        <button>Update Menu</button>
        <button>View Orders</button>
      </div>
    );
  }
}
