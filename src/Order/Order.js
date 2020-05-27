import React, { Component, Fragment, Suspense } from "react";
import { Route } from "react-router-dom";
import { ContextObject } from "../ContextAPI/ContextApi";

//import Grocerys from "../Grocerys/Gorcerys";

import OrderedProducts from "./OrderedProducts";
import Contacts from "../ContactsForm/Contacts";
import Auth from "../AuthForm/Auth";
import LinkToLogin from "../Navbar/LinkToLogin";
import LogoutMsg from "./Logout/LogoutMsg";
import CustomerOrder from "./CustomerOrder";
import Spinner from "../Spinner/Spinner";

const Grocerys = React.lazy(() => {
  return import("../Grocerys/Gorcerys");
});

class Order extends Component {
  static contextType = ContextObject;

  render() {
    console.log(this.context);
    return (
      <div className="orders">
        <Route path="/customer" exact component={CustomerOrder} />
        <Route path="/auth" exact component={Auth} />
        <Route path="/" component={LogoutMsg} />
        <Route
          path="/"
          exact
          render={() => (
            <Suspense fallback={<Spinner />}>
              <Grocerys />
            </Suspense>
          )}
        />
        <Route path="/" exact component={OrderedProducts} />
        <Route
          path="/orders"
          exact
          render={() =>
            !this.context.authorized ? (
              <Fragment>
                <p className="text-center">you need to login before order.</p>
                <LinkToLogin />
              </Fragment>
            ) : (
              <Contacts />
            )
          }
        />
      </div>
    );
  }
}

export default Order;
