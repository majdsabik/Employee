import React from 'react';
import { getSubOrders, advanceState } from '../services/repository';
import { Button } from 'react-bootstrap';
import { v4 as uuid } from 'uuid';

export default class OrdersView extends React.Component {
  state = {
    orders: [],
    user: this.props.user,
    restaurantPrefix: 'RIC',
  };

  componentDidMount() {
    this.fetchOrders();
  }

  fetchOrders() {
    getSubOrders(this.state.restaurantPrefix).then(orders => {
      this.setState({ orders });
    });
  }

  updateOrders = (event, order) => {
    if (order.status === 'placed') {
      advanceState(order._id, 'inPreparation').then(this.fetchOrders());
    }
    if (order.status === 'inPreparation') {
      advanceState(order._id, 'outForDelivery').then(this.fetchOrders());
    }
    if (order.status === 'outForDelivery') {
      advanceState(order._id, 'Delivered').then(this.fetchOrders());
    }
  };

  calculateQuantiny(order) {
    let result = {};
    order.items.map(item => (result[item.name] ? result[item.name]++ : (result[item.name] = 1)));
    return (
      <ul>
        {Object.entries(result).map(item => (
          <li key={uuid()}>{item.join(': ')}</li>
        ))}
      </ul>
    );
  }

  render() {
    const { orders } = this.state;
    if (orders.length === 0) {
      return (
        <>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <h3>No orders at the moment</h3>
        </>
      );
    } else
      return (
        <div className=' container'>
          <h2>Pending orders</h2>
          {orders.map(order => (
            <div key={uuid()}>
              <br />
              <h4>Order ID: {order.subOrderId}</h4>
              <h4>Order Status: {order.status}</h4>
              <h4>Subtotal: €{order.subTotal}</h4>
              <h4>Created at: {order.createdAt.split('T')[1].substring(0, 8)}</h4>
              <h4>Order Items: {this.calculateQuantiny(order)}</h4>
              <Button to='/' onClick={event => this.updateOrders(event, order)}>
                Change order status
              </Button>
              <br />
              <br />
            </div>
          ))}
        </div>
      );
  }
}
