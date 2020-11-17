import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMeals } from "../actions/mealActions";
import { addToCart } from "../actions/cartActions";

class Meals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meal: null,
    };
  }

  componentDidMount() {
    this.props.fetchMeals();
  }

  render() {
    // const { meal } = this.state;
    return (
      <div>
        {!this.props.meals ? (
          <div>Loading...</div>
        ) : (
          <ul className="meals">
            {this.props.meals.map((meal) => (
              <li key={meal._id}>
                <div className="meal">
                  <p>{meal.title}</p>
                  <button
                    onClick={() => this.props.addToCart(meal)}
                    className="button"
                  >
                    Add
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default connect((state) => ({ meals: state.meals.items }), {
  fetchMeals,
  addToCart,
})(Meals);
