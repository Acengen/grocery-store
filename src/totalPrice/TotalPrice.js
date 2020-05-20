import React from "react";

const TotalPrice = (props) => {
  return (
    <div className="total-price text-right">
      <p>- ${props.total.toFixed(2)}</p>
    </div>
  );
};
export default TotalPrice;
