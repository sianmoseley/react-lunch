const { FETCH_MEALS, DELETE_MEAL, CREATE_MEAL } = require("../types");

export const mealsReducer = (state = {}, action) => {
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
