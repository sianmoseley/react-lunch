import React from "react";
import { Provider } from "react-redux";
import Cart from "./components/Cart";
import Meals from "./components/Meals";
import store from "./store";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="grid-container">
          <header>
            <a href="/">Production Lunch App</a>
          </header>
          <main>
            <div className="content">
              <div className="main">
                <Meals />
              </div>
              <div className="sidebar">
                <Cart />
              </div>
            </div>
          </main>
          <footer>Production Lunch App 2020: All rights are reserved.</footer>
        </div>
      </Provider>
    );
  }
}

export default App;
