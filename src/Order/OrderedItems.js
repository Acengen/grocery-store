import React, { useContext } from "react";
import { ContextObject } from "../ContextAPI/ContextApi";

const OrderedItems = (props) => {
  const context = useContext(ContextObject);
  return (
    <div className="text-left" key={props.contactId}>
      <ul style={{ listStyle: "none" }}>
        <li>
          {props.selectedOrder.name}{" "}
          <span>${props.selectedOrder.price} /kg</span>{" "}
          <button
            onClick={() =>
              context.remove(props.selectedOrder.price, props.index)
            }
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
