import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

import { findItemsByAttr } from "../test/testUtils";
import Contacts from "./Contacts";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props, state) => {
  const wrapper = shallow(<Contacts />);
  if (state) {
    wrapper.setState(state);
  }
  return wrapper;
};

test("should render Contacts component", () => {
  const wrapper = setup();
  const component = findItemsByAttr(wrapper, "contacts");
  expect(component.length).toBe(1);
});

test("should render Alert component", () => {
  const wrapper = setup();
  const component = findItemsByAttr(wrapper, "alert");
  expect(component.length).toBe(1);
});

test("should inputs render", () => {
  const wrapper = setup();
  const component = findItemsByAttr(wrapper, "inputContacts");
  expect(component.length).toBe(4);
});

test("should button render", () => {
  const wrapper = setup();
  const component = findItemsByAttr(wrapper, "contactsBtn");
  expect(component.length).toBe(1);
});

describe("change state", () => {
  test("should render a state when button is NOT clicked", () => {
    const wrapper = setup();
    const name = wrapper.state("name");
    const address = wrapper.state("address");
    const city = wrapper.state("city");
    const zip = wrapper.state("zip");
    expect(name).toBe("");
    expect(address).toBe("");
    expect(city).toBe("");
    expect(zip).toBe("");
  });
  test('should render  name when button is clicked"', () => {
    const name = "Djordje";

    const wrapper = setup(null, { name });
    const button = findItemsByAttr(wrapper, "contactsBtn");
    button.simulate("click");

    wrapper.update();

    const nameChange = wrapper.state("name");
    expect(nameChange).toBe(name);
  });
  test("should render address when button is clicked", () => {
    const address = "Gavrila Principa";

    const wrapper = setup(null, { address });
    const button = findItemsByAttr(wrapper, "contactsBtn");
    button.simulate("click");

    wrapper.update();

    const addressChange = wrapper.state("address");
    expect(addressChange).toBe(address);
  });
  test("should render city when button is clicked", () => {
    const city = "Nis";

    const wrapper = setup(null, { city });
    const button = findItemsByAttr(wrapper, "contactsBtn");
    button.simulate("click");

    wrapper.update();

    const cityChange = wrapper.state("city");
    expect(cityChange).toBe(city);
  });
  test("should render zip when button is clicked", () => {
    const zip = 18000;

    const wrapper = setup(null, { zip });
    const button = findItemsByAttr(wrapper, "contactsBtn");
    button.simulate("click");

    wrapper.update();

    const zipChange = wrapper.state("zip");
    expect(zipChange).toBe(zip);
  });
});
