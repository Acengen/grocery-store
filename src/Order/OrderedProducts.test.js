import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

import { findItemsByAttr } from "../test/testUtils";
import OrderedProducts from "./OrderedProducts";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props, state) => {
  return shallow(<OrderedProducts {...props} />);
};

describe("render", () => {
  test("should NOT render a component", () => {
    const wrapper = setup();
    const compo = findItemsByAttr(wrapper, "selected-products");
    expect(compo.length).toBe(0);
  });
});
