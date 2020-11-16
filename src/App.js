import React from "react";
import Cart from "./components/Cart";
import Meals from "./components/Meals";
import data from "./data.json";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      meals: data.meals,
      cartItems: localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [],
    };
  }

  createOrder = (order) => {
    alert("Need to save order for " + order.name);
  };

  removeFromCart = (meal) => {
    const cartItems = this.state.cartItems.slice();
    this.setState({
      cartItems: cartItems.filter((x) => x._id !== meal._id),
    });
    localStorage.setItem(
      "cartItems",
      JSON.stringify(cartItems.filter((x) => x._id !== meal._id))
    );
  };

  addToCart = (meal) => {
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach((item) => {
      if (item._id === meal._id) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      cartItems.push({ ...meal, count: 1 });
    }
    this.setState({ cartItems });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="/">Production Lunch App</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Meals meals={this.state.meals} addToCart={this.addToCart} />
            </div>
            <div className="sidebar">
              <Cart
                cartItems={this.state.cartItems}
                removeFromCart={this.removeFromCart}
                createOrder={this.createOrder}
              />
            </div>
          </div>
        </main>
        <footer>Production Lunch App 2020: All rights are reserved.</footer>
      </div>
    );
  }
}

export default App;
