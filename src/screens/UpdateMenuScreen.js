import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMeals, deleteMeal } from "../actions/mealActions";

class UpdateMenuScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meal: null,
    };
  }

  componentDidMount() {
    this.props.fetchMeals();
  }

  deleteMeal(id) {
    this.props.deleteMeal(id);
  }

  render() {
    return (
      <div>
        <h3>Current Menu</h3>
        {!this.props.meals ? (
          <div>Loading...</div>
        ) : (
          <ul className="meals">
            {this.props.meals.map((meal) => (
              <li key={meal._id}>
                <div className="meal">
                  <p>{meal.title}</p>
                  <button
                    className="button"
                    onClick={() => this.props.deleteMeal(meal._id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
        <button>Add New Menu Item</button>
      </div>
    );
  }
}

export default connect((state) => ({ meals: state.meals.items }), {
  fetchMeals,
  deleteMeal,
})(UpdateMenuScreen);
