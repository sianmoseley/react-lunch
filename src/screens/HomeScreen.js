import React, { Component } from "react";
import Meals from "../components/Meals";
import Cart from "../components/Cart";

export default class HomeScreen extends Component {
  render() {
    return (
      <div>
        <div className="content">
          <div className="main">
            <Meals />
            <Cart />
          </div>
        </div>
      </div>
    );
  }
}
