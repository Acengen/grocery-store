export const findItemsByAttr = (wrapper, value) => {
  return wrapper.find(`[data-test="${value}"]`);
};
