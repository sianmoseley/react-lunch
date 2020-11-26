import React, { Component } from "react";
import { removeFromCart, onRemove } from "../actions/cartActions";
import { connect } from "react-redux";
import { createOrder, clearOrder } from "../actions/orderActions";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      department: "",
      additionalInfo: "",
      showCheckout: false,
      modalIsOpen: false,
    };
  }

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createOrder = (e) => {
    e.preventDefault();
    const order = {
      name: this.state.name,
      department: this.state.department,
      additionalInfo: this.state.additionalInfo,
      cartItems: this.props.cartItems,
    };
    this.props.createOrder(order);
  };

  closeModal = () => {
    this.props.clearOrder();
  };

  componentDidMount() {
    Modal.setAppElement("body");
  }

  render() {
    const { cartItems, order } = this.props;

    return (
      <div>
        {cartItems.length === 0 ? (
          <div className="cart cart-header">Basket is empty</div>
        ) : (
          <div className="cart cart-header">
            You have {cartItems.length} item in your basket{" "}
          </div>
        )}

        {order && (
          <Modal isOpen={true} onRequestClose={this.closeModal}>
            <Zoom>
              <button className="close-modal" onClick={this.closeModal}>
                x
              </button>
              <div className="order-details">
                <h3 className="success-message">Your order has been placed.</h3>
                <h2>Order {order._id}</h2>
                <ul>
                  <li>
                    <div>Full Name:</div>
                    <div>{order.name}</div>
                  </li>
                  <li>
                    <div>Department:</div>
                    <div>{order.department}</div>
                  </li>
                  <li>
                    <div>Additional Order Info:</div>
                    <div>{order.additionalInfo}</div>
                  </li>
                  <li>
                    <div>Date:</div>
                    <div>{order.createdAt}</div>
                  </li>
                  <li>
                    <div>Basket Items</div>
                    <div>
                      {order.cartItems.map((x) => (
                        <div>
                          {x.count} {" x "} {x.title}
                        </div>
                      ))}
                    </div>
                  </li>
                </ul>
              </div>
            </Zoom>
          </Modal>
        )}
        <div>
          <div className="cart">
            <ul className="cart-items">
              {cartItems.map((item) => (
                <li key={item._id}>
                  <div className="cart">
                    <div>
                      {item.title} x {item.count}
                    </div>
                    <button
                      className="button-remove"
                      onClick={() => this.props.removeFromCart(item)}
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {cartItems.length !== 0 && (
            <div>
              <div className="cart">
                <button
                  onClick={() => {
                    this.setState({ showCheckout: true });
                  }}
                  className="button primary"
                >
                  Proceed
                </button>
              </div>
              {this.state.showCheckout && (
                <div className="cart">
                  <form onSubmit={this.createOrder}>
                    <ul className="form-container">
                      <li>
                        <label>Full Name</label>
                        <input
                          name="name"
                          type="text"
                          required
                          onChange={this.handleInput}
                        ></input>
                      </li>
                      <li>
                        <label>Department</label>
                        <input
                          name="department"
                          type="text"
                          required
                          onChange={this.handleInput}
                        ></input>
                      </li>
                      <li>
                        <label>Any Additional Order Info?</label>
                        <input
                          name="additionalInfo"
                          type="text"
                          onChange={this.handleInput}
                        ></input>
                      </li>
                      <li>
                        <button className="submitOrderButton" type="submit">
                          Submit Order
                        </button>
                      </li>
                    </ul>
                  </form>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    order: state.order.order,
    cartItems: state.cart.cartItems,
  }),
  { removeFromCart, createOrder, clearOrder, onRemove }
)(Cart);
