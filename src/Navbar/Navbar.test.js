import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

import { findItemsByAttr } from "../test/testUtils";
import Navbar from "./Navbar";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props) => {
  return shallow(<Navbar {...props} />);
};

describe("testing Navbar", () => {
  test("should render", () => {
    const wrapper = setup();
    const component = findItemsByAttr(wrapper, "navbar");
    expect(component.length).toBe(1);
  });
});
