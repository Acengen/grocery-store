import React, { Fragment, useContext } from "react";
import { NavLink } from "react-router-dom";
import { ContextObject } from "../ContextAPI/ContextApi";
import Logout from "../Order/Logout/Logout";

const NavbarItems = (props) => {
  const context = useContext(ContextObject);
  let content;
  if (!context.authorized && props.success) {
    content = (
      <NavLink className="right" to="/auth" exact data-test="link-auth">
        Login
      </NavLink>
    );
  } else {
    content = <Logout data-test="logout" />;
  }
  return (
    <div data-test="navbar-items">
      <NavLink to="/" exact data-test="link">
        Home
      </NavLink>
      <NavLink to="/orders" exact data-test="link">
        Order
      </NavLink>
      {content}
      <NavLink to="/customer" exact data-test="link">
        Your Orders
      </NavLink>
    </div>
  );
};

export default NavbarItems;
