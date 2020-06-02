import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

import { findItemsByAttr } from "../test/testUtils";
import Order from "./Order";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props) => {
  return shallow(<Order {...props} />);
};

test("testing a component render", () => {
  const wrapper = setup({ auth: true });
  const component = findItemsByAttr(wrapper, "order");
  expect(component.length).toBe(1);
});
