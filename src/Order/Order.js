import React, { Component, Fragment } from "react";
import { Route } from "react-router-dom";
import { ContextObject } from "../ContextAPI/ContextApi";

import Grocerys from "../Grocerys/Gorcerys";
import OrderedProducts from "./OrderedProducts";
import Contacts from "../ContactsForm/Contacts";
import Auth from "../AuthForm/Auth";
import LinkToLogin from "../Navbar/LinkToLogin";
import LogoutMsg from "./Logout/LogoutMsg";
import CustomerOrder from "./CustomerOrder";

class Order extends Component {
  static contextType = ContextObject;

  render() {
    return (
      <div className="orders" data-test="order">
        <Route path="/customer" exact component={CustomerOrder} />
        <Route path="/auth" exact component={Auth} />
        <Route path="/" component={LogoutMsg} />
        <Route path="/" exact component={Grocerys} />
        <Route path="/" exact component={OrderedProducts} />
        <Route
          path="/orders"
          exact
          render={() =>
            !this.context.authorized && this.props.auth ? (
              <Fragment>
                <p className="text-center">you need to login before order.</p>
                <LinkToLogin success={true} data-test="link-to-login" />
              </Fragment>
            ) : (
              <Contacts data-test="contacts" />
            )
          }
        />
      </div>
    );
  }
}

export default Order;
