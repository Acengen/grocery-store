import React, { Component } from "react";
import axios from "axios";
import Customer from "./Customer";
import LinkToLogin from "../Navbar/LinkToLogin";

class CustomerOrder extends Component {
  state = {
    orders: [],
    error: "",
    loading: false,
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    this.setState({ loading: true });
    axios
      .get(
        "https://grocery-store-d17ed.firebaseio.com/orders.json?auth=" +
          this.props.idToken
      )
      .then((response) => {
        let customerOrders = [];
        for (let key in response.data) {
          customerOrders.push(response.data[key]);
        }
        this.setState({ orders: customerOrders, loading: false });
      })
      .catch((error) => this.setState({ error: "Login to see your orders" }));
  };

  removeOrder = () => {
    this.setState((prevState) =>
      prevState.orders.filter((order) => console.log(order))
    );
  };

  render() {
    const custOrders = this.state.orders.map((order, index) => {
      return (
        <Customer
          index={index}
          order={order.orders}
          key={Math.random() * 1000}
          removeOrder={this.removeOrder}
        />
      );
    });
    return (
      <div>
        <p className="text-center">{this.state.error}</p>
        {custOrders}
        {!this.props.authorized ? <LinkToLogin /> : null}
      </div>
    );
  }
}

export default CustomerOrder;
