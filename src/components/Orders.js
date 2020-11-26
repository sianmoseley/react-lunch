import React, { Component } from "react";
import { fetchOrders } from "../actions/orderActions";
import { connect } from "react-redux";

class Orders extends Component {
  componentDidMount() {
    this.props.fetchOrders();
  }

  render() {
    const { orders } = this.props;

    return !orders ? (
      <div>No Orders</div>
    ) : (
      <div className="orders">
        <h2>Orders</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>DATE</th>
              <th>NAME</th>
              <th>DEPARTMENT</th>
              <th>ADDITIONAL INFO</th>
              <th>ITEMS</th>
              <th>BOXED UP?</th>
              <th>UPDATE</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.createdAt}</td>
                <td>{order.name}</td>
                <td>{order.department}</td>
                <td>{order.additionalInfo}</td>
                <td>
                  {order.cartItems.map((item) => (
                    <div>
                      {item.count} {" x "} {item.title}
                    </div>
                  ))}
                </td>
                <td>{order.processed.toString()}</td>
                <td>
                  <button>Update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default connect(
  (state) => ({
    orders: state.order.orders,
  }),
  {
    fetchOrders,
  }
)(Orders);
