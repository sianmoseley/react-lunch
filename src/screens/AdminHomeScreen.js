import React, { Component } from "react";
import fire from "../config/firebase";
import Orders from "../components/Orders";
import UpdateMenuScreen from "./UpdateMenuScreen";
import { BrowserRouter, Link, Route } from "react-router-dom";

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
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to="/UpdateMenuScreen"> Update Menu</Link>
            </li>
            <li>
              <Link to="/ViewOrders"> View Orders</Link>
            </li>
            <li>
              <button onClick={this.logout}>Logout</button>
            </li>
          </ul>
          <Route path="/UpdateMenuScreen" component={UpdateMenuScreen} />
          <Route path="/ViewOrders" component={Orders} />
        </div>
      </BrowserRouter>
    );
  }
}
