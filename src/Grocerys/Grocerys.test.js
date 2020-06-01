import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

import { findItemsByAttr } from "../test/testUtils";
import Grocerys from "./Gorcerys";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props) => {
  return shallow(<Grocerys />);
};

test("should Grocerys comp render", () => {
  const wrapper = setup();
  const grocerys = findItemsByAttr(wrapper, "products");
  expect(grocerys.length).toBe(1);
});

test("should render grocerys products card", () => {
  const wrapper = shallow(
    <div data-test="products">
      <div className="card">product</div>
      <div className="card">product</div>
      <div className="card">product</div>
      <div className="card">product</div>
    </div>
  );
  const mainDiv = wrapper.find(".card").map((node) => node.length);
  expect(mainDiv.length).toBe(4);
});
