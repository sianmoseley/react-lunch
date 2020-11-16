import React, { Component } from "react";

export default class Meals extends Component {
  render() {
    return (
      <div>
        <ul className="meals">
          {this.props.meals.map((meal) => (
            <li key={meal._id}>
              <div className="meal">
                <p>{meal.title}</p>
                <button
                  onClick={() => this.props.addToCart(meal)}
                  className="button primary"
                >
                  Add to Basket
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
