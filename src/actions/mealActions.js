import { FETCH_MEALS, DELETE_MEAL } from "../types";

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
