import React from "react";
import Meals from "./components/Meals";
import data from "./data.json";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      meals: data.meals,
    };
  }

  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="/">Production Lunch App</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Meals meals={this.state.meals} />
            </div>
            <div className="sidebar">Basket Items</div>
          </div>
        </main>
        <footer>Production Lunch App 2020: All rights are reserved.</footer>
      </div>
    );
  }
}

export default App;
