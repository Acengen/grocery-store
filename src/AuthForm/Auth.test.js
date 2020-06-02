import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

import { findItemsByAttr } from "../test/testUtils";
import Auth from "./Auth";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props, state) => {
  const wrapper = shallow(<Auth />);
  if (state) {
    wrapper.setState(state);
  }
  return wrapper;
};

describe("testing Auth.js", () => {
  test("render auth-component ", () => {
    const wrapper = setup();
    const auth = findItemsByAttr(wrapper, "auth-component");
    expect(auth.length).toBe(1);
  });
  test("render form and inputs ", () => {
    const wrapper = setup();
    const form = findItemsByAttr(wrapper, "form-inputs");
    const inputs = findItemsByAttr(wrapper, "inputs");
    expect(form.length).toBe(1);
    expect(inputs.length).toBe(2);
  });
});

describe("testing a state in Auth.js", () => {
  test("email and password are empty at start", () => {
    const wrapper = setup();
    const email = wrapper.state("email");
    const password = wrapper.state("password");
    expect(email).toBe("");
    expect(password).toBe("");
  });

  test("email state change", () => {
    const email = "kocic999@yahoo.com";
    const wrapper = setup(null, { email });
    const button = findItemsByAttr(wrapper, "submit");
    button.simulate("click");
    wrapper.update();

    const emailChange = wrapper.state("email");
    expect(emailChange).toBe(email);
  });
  test("password state change", () => {
    const password = "djole1989";
    const wrapper = setup(null, { password });
    const button = findItemsByAttr(wrapper, "submit");
    button.simulate("click");
    wrapper.update();

    const passwordChange = wrapper.state("password");
    expect(passwordChange).toBe(password);
  });
});
