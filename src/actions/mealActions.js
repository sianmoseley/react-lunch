import { FETCH_MEALS, DELETE_MEAL, CREATE_MEAL } from "../types";

export const fetchMeals = () => async (dispatch) => {
  const res = await fetch("/api/meals");
  const data = await res.json();
  dispatch({
    type: FETCH_MEALS,
    payload: data,
  });
};

export const deleteMeal = (id) => async (dispatch) => {
  const res = await fetch(`/api/meals/${id}/`, {
    method: "DELETE",
  });
  dispatch({
    type: DELETE_MEAL,
    payload: res.data,
  });
};

export const createMeal = (meal) => (dispatch) => {
  fetch("api/meals", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(meal),
  })
    //.then((res) => res.json())
    .then((res) => res.text())
    .then((text) => console.log(text))
    .then((data) => {
      dispatch({ type: CREATE_MEAL, payload: data });
    });
};
