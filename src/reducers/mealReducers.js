const { FETCH_MEALS } = require("../types");

export const mealsReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_MEALS:
      return { items: action.payload };
    default:
      return state;
  }
};
