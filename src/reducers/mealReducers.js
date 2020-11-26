const { FETCH_MEALS, DELETE_MEAL, CREATE_MEAL } = require("../types");

const initialState = {
  meals: [],
};

export const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MEALS:
      return { items: action.payload };
    case DELETE_MEAL:
      return { items: action.payload };
    case CREATE_MEAL:
      return { items: action.payload };
    default:
      return state;
  }
};
