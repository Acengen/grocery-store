import React from "react";

const GroceryContext = React.createContext({
  totalPrice: () => {},
  remove: () => {},
});

export default GroceryContext;
