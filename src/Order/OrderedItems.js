import React from "react";

const OrderedItems = (props) => {
  console.log("[OrderedItems.js] render ...");
  return (
    <div className="text-left">
      <ul style={{ listStyle: "none" }}>
        <li>
          {props.selectedOrder.name}{" "}
          <span>${props.selectedOrder.price} /kg</span>{" "}
          <button
            onClick={() => props.remove(props.selectedOrder.price, props.index)}
            className="ordered-button"
          >
            -
          </button>
        </li>
      </ul>
    </div>
  );
};

export default OrderedItems;
