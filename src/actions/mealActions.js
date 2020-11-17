import { FETCH_MEALS } from "../types";

export const fetchMeals = () => async (dispatch) => {
  const res = await fetch("/api/meals");
  const data = await res.json();
  dispatch({
    type: FETCH_MEALS,
    payload: data,
  });
};
