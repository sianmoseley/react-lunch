import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMeals, deleteMeal, createMeal } from "../actions/mealActions";

class UpdateMenuScreen extends Component {
  constructor(props) {
    super(props);

    //this.createMeal = this.createMeal.bind(this);
    this.state = {
      meal: null,
      showAddMenu: false,
      title: "",
    };
  }

  componentDidMount() {
    console.log(this.props.meals);
    this.props.fetchMeals();
  }

  componentDidUpdate() {
    this.props.fetchMeals();
  }

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createMeal = (e) => {
    e.preventDefault();
    const meal = {
      title: this.state.title,
    };
    this.props.createMeal(meal);
  };

  deleteMeal(id) {
    this.props.deleteMeal(id);
  }

  render() {
    //const { meals = [] } = this.props;
    return (
      <div>
        <h3 className="currentMenuTitle">Current Menu</h3>
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
        <button
          onClick={() => {
            this.setState({ showAddMenu: true });
          }}
          className="addNewMeal"
        >
          Add New Menu Item
        </button>
        {this.state.showAddMenu && (
          <div className="cart">
            <form onSubmit={this.createMeal}>
              <ul className="form-container">
                <li>
                  <label>Menu Item Title:</label>
                  <input
                    name="title"
                    type="text"
                    required
                    onChange={this.handleInput}
                  ></input>
                </li>
                <li>
                  <button className="saveNewMeal" type="submit">
                    Save New Menu Item
                  </button>
                </li>
              </ul>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default connect((state) => ({ meals: state.meals.items }), {
  fetchMeals,
  deleteMeal,
  createMeal,
})(UpdateMenuScreen);
