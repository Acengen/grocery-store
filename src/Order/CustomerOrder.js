import React from "react";
import { ContextObject } from "../ContextAPI/ContextApi";
import LinkToLogin from "../Navbar/LinkToLogin";

class CustomerOrder extends React.Component {
  static contextType = ContextObject;

  componentDidMount() {
    this.context.getDataFromDB();
  }

  render() {
    const orders = this.context.fetchData.map((order) => {
      return order.map((ord) => {
        return (
          <div className="card" key={Math.random() * 1000}>
            <h2>{ord.name}</h2>
            <p>${ord.price}</p>
          </div>
        );
      });
    });
    return <div>{!this.context.authorized ? <LinkToLogin /> : orders}</div>;
  }
}

export default CustomerOrder;
