import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

import { findItemsByAttr } from "../test/testUtils";
import LinkToLogin from "./LinkToLogin";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const defaultProps = { success: true };

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<LinkToLogin {...setupProps} />);
};

describe("render", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });
  test("should component render", () => {
    const component = findItemsByAttr(wrapper, "component-login");
    expect(component.length).toBe(1);
  });

  test("should render button in component", () => {
    const button = findItemsByAttr(wrapper, "button-login");
    expect(button.length).toBe(1);
  });
});

test("should component be render if success is true", () => {
  const wrapper = setup({ success: true });
  const component = findItemsByAttr(wrapper, "component-login");
  expect(component.length).toBe(1);
});

test("should not render a component if success is false", () => {
  const wrapper = setup({ success: false });
  const component = findItemsByAttr(wrapper, "component-login");
  expect(component.length).toBe(0);
});
