import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

import { findItemsByAttr } from "../test/testUtils";
import NavbarItems from "./NavbarItems";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const defaultProp = { success: true };

const setup = (props) => {
  const setupProps = { ...defaultProp, ...props };
  return shallow(<NavbarItems {...setupProps} />);
};

describe("testing NavbarItems", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });
  test("should render", () => {
    const component = findItemsByAttr(wrapper, "navbar-items");
    expect(component.length).toBe(1);
  });
  test("should links render", () => {
    const links = findItemsByAttr(wrapper, "link");
    expect(links.length).toBe(3);
  });
});

describe("testing Link-auth and logout", () => {
  test("rendering link if 'success' true", () => {
    const wrapper = setup({ success: true });
    const link = findItemsByAttr(wrapper, "link-auth");
    expect(link.length).toBe(1);
  });
  test('not rendering link if "success" false ', () => {
    const wrapper = setup({ success: false });
    const link = findItemsByAttr(wrapper, "link-auth");
    expect(link.length).not.toBe(1);
  });
  test("not rendering logout comp if 'success' true", () => {
    const wrapper = setup({ success: true });
    const link = findItemsByAttr(wrapper, "logout");
    expect(link.length).toBe(0);
  });
  test('rendering logout comp if "success" false ', () => {
    const wrapper = setup({ success: false });
    const link = findItemsByAttr(wrapper, "logout");
    expect(link.length).toBe(1);
  });
});
