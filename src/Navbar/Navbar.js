import React from "react";
import NavbarItems from "./NavbarItems";

const Navbar = () => (
  <div className="navigations" data-test="navbar">
    <NavbarItems success={true} />
  </div>
);

export default Navbar;
