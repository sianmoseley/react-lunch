import { ADD_TO_CART, REMOVE_FROM_CART, DECREASE_QUANTITY } from "../types";

export const addToCart = (meal) => (dispatch, getState) => {
  const cartItems = getState().cart.cartItems.slice();
  let alreadyExists = false;

  cartItems.forEach((x) => {
    if (x._id === meal._id) {
      alreadyExists = true;
      x.count++;
    }
  });
  if (!alreadyExists) {
    cartItems.push({ ...meal, count: 1 });
  }
  dispatch({
    type: ADD_TO_CART,
    payload: { cartItems },
  });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const removeFromCart = (meal) => (dispatch, getState) => {
  const cartItems = getState()
    .cart.cartItems.slice()
    .filter((x) => x._id !== meal._id);

  dispatch({ type: REMOVE_FROM_CART, payload: { cartItems } });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const onRemove = (meal) => (dispatch, getState) => {
  const cartItems = getState();
  const exist = cartItems.find((x) => x.id === meal.id);
  if (exist.qty === 1) {
    this.setState(cartItems.filter((x) => x.id !== meal.id));
  } else {
    this.setState(
      cartItems.map((x) =>
        x.id === meal.id ? { ...exist, qty: exist.qty - 1 } : x
      )
    );
  }
  dispatch({ type: DECREASE_QUANTITY, payload: { cartItems } });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
