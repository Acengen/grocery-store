import React, { Component } from "react";
import axios from "axios";
import Alert from "../Alert/Alert";
import { Redirect } from "react-router-dom";
import { ContextObject } from "../ContextAPI/ContextApi";

class Contacts extends Component {
  state = {
    name: "",
    address: "",
    city: "",
    zip: "",
    ordered: false,
    orderedText: "ORDER COMPLETED",
  };

  static contextType = ContextObject;

  submitHandler = (e) => {
    e.preventDefault();
    const postData = {
      name: this.state.name,
      address: this.state.address,
      city: this.state.city,
      zip: this.state.zip,
      orders: this.context.selectedOrders,
      userId: this.context.userId,
    };

    if (
      this.state.name === "" ||
      this.state.address === "" ||
      this.state.city === "" ||
      this.state.zip === ""
    ) {
      this.context.alertMessage("Please Fill empty fields", "warning");
    } else {
      this.context.alertMessage("Successfully orderd", "success ");
      axios
        .post(
          "https://grocery-store-d17ed.firebaseio.com/orders.json",
          postData
        )
        .then((response) => {
          this.setState({
            ordered: true,
          });
        });
    }
  };

  inputChangeHandler = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  render() {
    if (this.state.ordered) {
      return <Redirect to="/" />;
    }
    return (
      <div className="order-div">
        <h4 className="text-center">Order Form</h4>
        <Alert />
        <form onSubmit={this.submitHandler} className="order-form">
          <label>Name</label>
          <input
            onChange={this.inputChangeHandler}
            value={this.state.name}
            type="text"
            id="name"
          />
          <label>Address</label>
          <input
            onChange={this.inputChangeHandler}
            value={this.state.address}
            type="text"
            id="address"
          />
          <label>City</label>
          <input
            onChange={this.inputChangeHandler}
            value={this.state.city}
            type="text"
            id="city"
          />
          <label>ZipCode</label>
          <input
            onChange={this.inputChangeHandler}
            value={this.state.zip}
            type="number"
            id="zip"
          />
          <button className="contacts-button">Order</button>
        </form>
      </div>
    );
  }
}

export default Contacts;
