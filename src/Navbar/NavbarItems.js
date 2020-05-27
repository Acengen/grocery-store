import React, { Fragment, useContext } from "react";
import { NavLink } from "react-router-dom";
import { ContextObject } from "../ContextAPI/ContextApi";
import Logout from "../Order/Logout/Logout";

const NavbarItems = () => {
  const context = useContext(ContextObject);
  return (
    <Fragment>
      <NavLink to="/" exact>
        Home
      </NavLink>
      <NavLink to="/orders" exact>
        Order
      </NavLink>
      {!context.authorized ? (
        <NavLink className="right" to="/auth" exact>
          Login
        </NavLink>
      ) : (
        <Logout />
      )}
      <NavLink to="/customer" exact>
        Your Orders
      </NavLink>
    </Fragment>
  );
};

export default NavbarItems;
