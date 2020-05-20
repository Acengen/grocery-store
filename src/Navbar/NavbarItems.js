import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const NavbarItems = () => (
  <Fragment>
    <NavLink to="/" exact>
      Home
    </NavLink>
    <NavLink to="/orders" exact>
      Order
    </NavLink>
    <NavLink className="right" to="/auth" exact>
      Login
    </NavLink>
    <NavLink to="/customer" exact>
      Your Orders
    </NavLink>
  </Fragment>
);

export default NavbarItems;
