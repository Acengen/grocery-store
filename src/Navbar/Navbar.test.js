import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Navbar from "./Navbar";
import NavbarItems from "./NavbarItems";

configure({ adapter: new Adapter() });

describe("<Navbar />", () => {
  it("should render 1 Navbar elements", () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.find(NavbarItems)).toHaveLength(1);
  });
});
