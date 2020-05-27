import React, { useContext } from "react";
import { ContextObject } from "../ContextAPI/ContextApi";
const TotalPrice = () => {
  const context = useContext(ContextObject);
  return (
    <div className="total-price text-right">
      <p>- ${context.total.toFixed(2)}</p>
    </div>
  );
};
export default TotalPrice;
